import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEscolaComponent } from './lista-escola.component';

describe('ListaEscolaComponent', () => {
  let component: ListaEscolaComponent;
  let fixture: ComponentFixture<ListaEscolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEscolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEscolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
