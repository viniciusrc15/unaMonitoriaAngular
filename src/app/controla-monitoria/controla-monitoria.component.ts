import { DisciplinaService } from './../disciplina/disciplina.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MonitoresService } from '../monitores/monitores.service';

@Component({
  selector: 'app-controla-monitoria',
  templateUrl: './controla-monitoria.component.html',
  styleUrls: ['./controla-monitoria.component.css']
})
export class ControlaMonitoriaComponent implements OnInit {
  monitoriaForm: FormGroup;
  monitoriaFormFiels: any;
  monitores: any = null;
  disciplinas: any = null;
  constructor(public fb: FormBuilder,
    public monitoresSrv: MonitoresService,
    public disciplinasSrv: DisciplinaService) {
    this.monitoriaFormFiels = {
      disciplina_id_disciplina: [''],
      monitor_id_monitor: [],
      horario: [],
      localizacao: ['']
    };
    this.monitoriaForm = this.fb.group(this.monitoriaFormFiels);
  }

  ngOnInit() {
    this.monitoresSrv.getMonitores()
      .then(res => {
        this.monitores = JSON.parse(res._body);
      })
      .catch(e => {
        console.error(e);
      });
    this.disciplinasSrv.getDisciplinas()
      .then(res => {
        this.disciplinas = JSON.parse(res._body);
      })
      .catch(e => {
        console.error(e);
      });
  }

  cadastrarMonitoria() {
    console.log(this.monitoriaForm.value);
  }
}
