import { Component } from '@angular/core';
import { ProduitsService } from '../../services/produits/produits.service';

@Component({
  selector: 'app-moteur',
  standalone: true,
  imports: [],
  templateUrl: './moteur.component.html',
  styleUrls: ['./moteur.component.css']
})
export class MoteurComponent {
  constructor(private produitsService: ProduitsService) { }

  updateProduits(input: string) {
    this.produitsService.getProduits(input, input, input).subscribe();
  }
}