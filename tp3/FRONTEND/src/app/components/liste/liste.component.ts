import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProduitsService } from '../../services/produits/produits.service';
import { Produit } from '../../models/produit';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  produits: Observable<Produit[]>;

  constructor(private produitsService: ProduitsService) {
    this.produits = new Observable<Produit[]>();
  }

  ngOnInit() {
    this.produits = this.produitsService.getProduits();
  }
}