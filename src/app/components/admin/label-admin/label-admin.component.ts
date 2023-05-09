import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-label-admin',
  templateUrl: './label-admin.component.html',
  styleUrls: ['./label-admin.component.scss']
})
export class LabelAdminComponent {
  @Input() title: string | undefined;
}
