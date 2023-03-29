import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  category = [
    'Hàng mới về',
    'Bán chạy nhất',
    'Áo Polo Yody',
    'thời trang công sở',
    'YODY SPORT'
  ]
}
