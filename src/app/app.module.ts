import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { BaseService } from './base/base.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SobreComponent } from './sobre/sobre.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { FooterComponent } from './footer/footer.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { VersaoComponent } from './versao/versao.component';

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
    HttpModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [BaseService, FormBuilder ],
  bootstrap: [AppComponent]
})
export class AppModule { }
