import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './empleado/lista-empleados/lista-empleados.component';
import { RegistrarEmpleadoComponent } from './empleado/registrar-empleado/registrar-empleado.component';
import { ActualizarEmpleadoComponent } from './empleado/actualizar-empleado/actualizar-empleado.component';
import { EmpleadoDetallesComponent } from './empleado/empleado-detalles/empleado-detalles.component';


const routes: Routes = [
  { path: 'empleados', component: ListaEmpleadosComponent },
  { path: '', redirectTo: 'empleados', pathMatch: 'full' },
  { path: 'registrar-empleado', component: RegistrarEmpleadoComponent},
  { path: 'actualizar-empleado/:id', component: ActualizarEmpleadoComponent } ,

   { path: 'empleado-detalles/:id', component: EmpleadoDetallesComponent },
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
