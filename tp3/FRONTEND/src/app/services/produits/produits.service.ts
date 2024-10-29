import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Produit } from '../../models/produit';
import { environment } from '../../../environment/environment';

@Injectable()
export class ProduitsService {
  private produitSubject: BehaviorSubject<Produit[]> = new BehaviorSubject<Produit[]>([]);
  public produits$: Observable<Produit[]> = this.produitSubject.asObservable();

  constructor(private http: HttpClient) { }

  public getProduits(name: string = '', forme: string = '', categorie: string = ''): Observable<Produit[]> {
    // Normalisation de la recherche pour ignorer les accents et la casse
    const normalize = (str: string) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

    return this.http.get<Produit[]>(environment.backendClient).pipe(
      map((produits: Produit[]) => {
        return produits.filter(produit => {
          const matchesName = name ? normalize(produit.nom).includes(normalize(name)) : true;
          const matchesForme = forme ? normalize(produit.forme).includes(normalize(forme)) : true;
          const matchesCategorie = categorie ? normalize(produit.categorie).includes(normalize(categorie)) : true;
          return matchesName || matchesForme || matchesCategorie;
        });
      }),
      map((filteredProduits: Produit[]) => {
        this.produitSubject.next(filteredProduits);
        return filteredProduits;
      })
    );
  }
}