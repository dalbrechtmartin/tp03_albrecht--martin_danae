import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Produit } from '../../models/produit';
import { environment } from '../../../environment/environment';

@Injectable()
export class ProduitsService {

  constructor(private http: HttpClient) { }

  /**
   * Récupère la liste des produits depuis le backend.
   * 
   * @returns {Observable<Produit[]>} Un observable contenant un tableau de produits.
   */
  public getProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(environment.backendClient);
  }
}

// export class ApiService {

//   private cakesSubject: BehaviorSubject<Cake[]> = new BehaviorSubject<Cake[]>([]);
//   public cakes$: Observable<Cake[]> = this.cakesSubject.asObservable();

//   constructor(private http: HttpClient) { }

//   public getCakes(name: string = '', type: string = '') {
//     this.http.get<Cake[]>(environment.backendClient).pipe(
//       map((cakes: Cake[]) => {
//         return cakes.filter(cake => {
//           const matchesName = name ? cake.nom.toLowerCase().includes(name.toLowerCase()) : true;
//           const matchesType = type ? cake.type.toLowerCase().includes(type.toLowerCase()) : true;
//           return matchesName && matchesType;
//         });
//       })
//     ).subscribe(cakes => this.cakesSubject.next(cakes));
//   }
// }