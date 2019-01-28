import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BaseService } from '../base/base.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})

export class PesquisaComponent implements OnInit {
  formPesquisa: FormGroup;
  pesquisaFormFields: any;
  public cursos: any;
  public monitorias: any;

  constructor(private srv: BaseService, public fb: FormBuilder) {
    this.cursos = [];
    this.srv.consultaCursos()
      .then(resultado => {
        this.cursos = JSON.parse(resultado._body);
      }).catch(e => {
        this.cursos = [];
      });
    /*.subscribe(resultado => {
      if (resultado.ok) {
        this.cursos = JSON.parse(resultado._body);

      } else {
      }
    });*/
  }

  ngOnInit(): void {
    this.pesquisaFormFields = {
      disciplina: [''],
      curso: ['']
    };
    this.formPesquisa = this.fb.group(this.pesquisaFormFields);
  }

  pesquisaMonitorias() {
    this.srv.consultaMonitoria(this.formPesquisa.value)
      .then(resul => {
        console.log(resul);
        this.monitorias = JSON.parse((resul._body));
      })
      .catch(erro => {
        console.log(erro);
      });

  }
}
