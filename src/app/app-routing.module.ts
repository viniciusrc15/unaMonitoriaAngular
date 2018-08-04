import { AjudaComponent } from './ajuda/ajuda.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { SobreComponent } from './sobre/sobre.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VersaoComponent } from './versao/versao.component';
import { ControlaMonitoriaComponent } from './controla-monitoria/controla-monitoria.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pesquisa',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sobre',
    component: SobreComponent
  },
  {
    path: 'pesquisa',
    component: PesquisaComponent
  },
  {
    path: 'cadastrar-monitoria',
    component: ControlaMonitoriaComponent
  },
  {
    path: 'ajuda',
    component: AjudaComponent
  },
  {
    path: 'versao',
    component: VersaoComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
