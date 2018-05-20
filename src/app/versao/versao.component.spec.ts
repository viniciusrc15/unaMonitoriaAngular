import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersaoComponent } from './versao.component';

describe('VersaoComponent', () => {
  let component: VersaoComponent;
  let fixture: ComponentFixture<VersaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
