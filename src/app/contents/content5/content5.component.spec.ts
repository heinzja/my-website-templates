import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from 'src/app/material/material.module';

import { Content5Component } from './content5.component';

describe('Content5Component', () => {
  let component: Content5Component;
  let fixture: ComponentFixture<Content5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Content5Component ],
      imports: [ MaterialModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Content5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
