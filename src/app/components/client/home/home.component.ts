import {Component} from '@angular/core';

export interface Slug {
  id: number | undefined;
  name: string | undefined;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  slugs: Slug[] = [
    {id: 5, name: 'Áo polo'}
  ]
}
