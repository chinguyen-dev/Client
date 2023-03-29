import {Component, Input, OnInit} from '@angular/core';
import {StorageService} from "../../../services/storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user!: any;

  isModal: boolean = false;

  constructor(private storageService: StorageService) {
  }

  ngOnInit(): void {
    this.storageService.isAuthenticate.subscribe(user => this.user = user)
  }

  logOut() {
    this.storageService.signOut();
  }
}
