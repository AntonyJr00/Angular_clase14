import { Component } from '@angular/core';

interface ContactForm {
  name: string;
  dni: number;
  selector: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  vali = false;
  nombre = '';
  dni = '';
  selector = '';

  datos = {
    name: '',
    dni: '',
    selector: '',
  };

  clickeado() {
    if (this.nombre !== '' && this.dni !== '' && this.selector !== '') {
      this.datos.name = this.nombre;
      this.datos.dni = this.dni;
      this.datos.selector = this.selector;
      console.log(this.datos);
      this.vali = true;
    }
  }
}
