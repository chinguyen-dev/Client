import {Component, OnInit} from '@angular/core';
import {fromEvent, map, mapTo, merge} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {StoreService} from "../../../services/store.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isModal: boolean | undefined;
  user!: any

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.toggleModal();
  }

  toggleModal() {
    const element = document.querySelectorAll('li.hover');
    const hover$ = merge(
      fromEvent(element, 'mouseover').pipe(map(() => true)),
      fromEvent(element, 'mouseleave').pipe(map(() => false)),
    ).subscribe(value => this.isModal = value);
  }
}
