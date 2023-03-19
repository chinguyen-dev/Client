import {Component, OnInit} from '@angular/core';
import {map, of} from "rxjs";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  isActive(value: any) {
    let arr$: any = [];
    of(...this.dataSource).pipe(map((item) => {
      return item.name == value.name ? {...item, "isActive": "active"} : {...item, "isActive": ""};
    })).subscribe({
      next: val => arr$.push(val)
    });
    this.dataSource = arr$;
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
      "url": "/admin",
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
