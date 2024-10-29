import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProduitsService } from '../../services/produits/produits.service';
import { Produit } from '../../models/produit';
import { CommonModule } from '@angular/common';
import { MoteurComponent } from "../moteur/moteur.component";

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [CommonModule, MoteurComponent],
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  produits?: Observable<Produit[]>;

  constructor(private produitsService: ProduitsService) {
    this.produits = new Observable<Produit[]>();
  }

  ngOnInit() {
    // Appel initial pour récupérer tous les produits
    this.produitsService.getProduits().subscribe();
    this.produits = this.produitsService.produits$;
  }
}