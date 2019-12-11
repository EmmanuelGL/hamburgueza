import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menu = `<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
  <div class="card-header">MENU DEL DÍA</div>
    <div class="card-body">
      <h6 class="card-title">*HAMBURGUESAS</h6>
      <h6 class="card-title">*TACOS</h6>
      <h6 class="card-title">*ALITAS</h6>
    </div>
  </div>`;
  especialidades=`<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
  <div class="card-header">ESPECIALIDADES</div>
    <div class="card-body">
      <h6 class="card-title">*POZOLE</h6>
      <h6 class="card-title">*PANCITA</h6>
    </div>
  </div>`;
  bebida=`<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
  <div class="card-header">BEBIDAS</div>
    <div class="card-body">
      <h6 class="card-title">*Coca-Cola</h6>
      <h6 class="card-title">*Manzanita</h6>
      <h6 class="card-title">*Sprite</h6>
      <h6 class="card-title">*Sangria</h6>
      <div class="card-header">CERVESA</div>
      <h6 class="card-title">*Corona</h6>
      <h6 class="card-title">*Victoria"</h6>
    </div>
  </div>`;
  horario=`<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
  <div class="card-header">HORARIO</div>
    <div class="card-body">
      <h6 class="card-title">*Martes a Domingo</h6>
          <h6 class="card-title"> 17:00 am. a 21:00 pm"</h6>
    </div>
  </div>`;
  ubicacion=`<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
  <div class="card-header">UBICACION</div>
    <div class="card-body">
      <h6 class="card-title">*Calle Adolfo López Mateos Lt. 69 Col. Nopalcalc,o Pachuca Hidalgo</h6>
    </div>
  </div>`;
  constructor() { }

  ngOnInit() {
  }

}
