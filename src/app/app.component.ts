import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoAngular';

  persona:any={Nombre:"Ramon", Apellido:"Perez",Edad:"32",Direccion:"Santo Domingo"}
}
