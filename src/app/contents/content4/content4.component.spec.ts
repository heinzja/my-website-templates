import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from 'src/app/material/material.module';

import { Content4Component } from './content4.component';

describe('Content4Component', () => {
  let component: Content4Component;
  let fixture: ComponentFixture<Content4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Content4Component ],
      imports: [ MaterialModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Content4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
