import { Component,computed,signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';
@Component({
  selector: 'app-root',
   standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'Angularprograms';searchTerm = signal('');
  items= signal(['apple','mango','banana','avacado']);
  filteredItems = computed(() => {
  const lowerCaseSearchTerm = this.searchTerm().toLowerCase();
  return this.items().filter(item =>
    item.toLowerCase().includes(lowerCaseSearchTerm)
  );
});
}
