import { Component } from '@angular/core';
import { ISearch } from './models/ISearch';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'symptom-library-frontend';
  items: ISearch[] = [];

  constructor(private searchService: SearchService) {}
  searchItems(event: any) {
    const term = event.target.value;
    this.items = [];

    this.searchService.search(term).subscribe({
      next: (response) => (this.items = response),
      error: (e) => console.log(e),
    });
  }
}
