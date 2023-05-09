import {Component, OnInit} from '@angular/core';
import {from, map} from "rxjs";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  constructor() {
  }


  ngOnInit(): void {
    const indexStorage = localStorage.getItem('index');
    if (indexStorage) {
      const arr: any = [];
      from(this.dataSource)
        .pipe(
          map((item: any, index: number) => index === JSON.parse(indexStorage) ?
            {...item, "isActive": "active"} : {...item, "isActive": ""}
          ),
        ).subscribe({next: value => arr.push(value)});
      this.dataSource = arr;
    }
  }

  isActive(value: any) {
    let arr: any = [];
    localStorage.removeItem('index');
    from(this.dataSource)
      .pipe(
        map((item) => item.name == value.name ? {...item, "isActive": "active"} : {...item, "isActive": ""}),
      ).subscribe({
      next: val => arr.push(val),
      error: err => console.log(err),
    });
    arr.map((item: any, index: number) => item.isActive == "active" ? localStorage.setItem('index', JSON.stringify(index)) : '');
    this.dataSource = arr;
  }

  dataSource = [
    {
      "name": "Dashboard",
      "material": "dashboard",
      "url": "/admin",
      "isActive": "active"
    },
    {
      "name": "Sản phẩm",
      "material": "table_view",
      "url": "products",
      "isActive": ""
    },
    {
      "name": "Màu sắc",
      "material": "palette",
      "url": "/admin",
      "isActive": ""
    },
    {
      "name": "Danh mục",
      "material": "table_view",
      "url": "categories",
      "isActive": ""
    },
    {
      "name": "Tùy chọn",
      "material": "tune",
      "url": "/admin",
      "isActive": ""
    },
  ];

}
