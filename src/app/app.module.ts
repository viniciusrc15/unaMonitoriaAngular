import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SobreComponent } from './sobre/sobre.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { FooterComponent } from './footer/footer.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { VersaoComponent } from './versao/versao.component';
import { BaseModule } from './base/base.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SobreComponent,
    PesquisaComponent,
    FooterComponent,
    AjudaComponent,
    VersaoComponent
  ],
  imports: [
    BrowserModule,
    BaseModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [ FormBuilder ],
  bootstrap: [AppComponent]
})
export class AppModule { }
