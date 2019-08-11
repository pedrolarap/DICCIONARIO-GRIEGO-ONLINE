import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input("nombredelavariable") verificar:any

  constructor() { }

  ngOnInit() {
  }

}
