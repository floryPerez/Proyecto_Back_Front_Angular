import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrl: './registrar-empleado.component.css'
})
export class RegistrarEmpleadoComponent implements OnInit {


  empleado: Empleado = new Empleado();

constructor(private empleadoServicio:EmpleadoService, 
  private router:Router) { }

  ngOnInit(): void {
    console.log(this.empleado)
  }

  guardarEmpleado() {
    this.empleadoServicio.registrarEmpleado(this.empleado).subscribe(dato => {
     console.log(dato);
   this.irAlaListaDeEmpleados();//llama al metodo
    }, error => console.log(error));

   }
   irAlaListaDeEmpleados() {
     this.router.navigate(['/empleados']);
     Swal.fire('Empleado agregado',`El empleado ${this.empleado.nombre} ha sido agregado con exito`,`success`);

   }

  onSubmit() {
    this.guardarEmpleado();//registar empelado
  }
}
