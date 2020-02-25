import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModlComponent } from './modl.component';

describe('ModlComponent', () => {
  let component: ModlComponent;
  let fixture: ComponentFixture<ModlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
