import { Component } from '@angular/core';
import { TetiereComponent } from './components/tetiere/tetiere.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListeComponent } from './components/liste/liste.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TetiereComponent, FooterComponent, ListeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Fairy Treasures';
}
