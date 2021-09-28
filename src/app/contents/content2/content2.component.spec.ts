import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from 'src/app/material/material.module';

import { Content2Component } from './content2.component';

describe('Content2Component', () => {
  let component: Content2Component;
  let fixture: ComponentFixture<Content2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Content2Component ],
      imports: [ MaterialModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Content2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
