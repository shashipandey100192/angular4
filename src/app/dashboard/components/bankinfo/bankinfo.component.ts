import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-bankinfo',
  templateUrl: './bankinfo.component.html',
  styleUrls: ['./bankinfo.component.scss']
})
export class BankinfoComponent {

@Input() name:any

}
