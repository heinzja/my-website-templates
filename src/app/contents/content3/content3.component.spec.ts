import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from 'src/app/material/material.module';

import { Content3Component } from './content3.component';

describe('Content3Component', () => {
  let component: Content3Component;
  let fixture: ComponentFixture<Content3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Content3Component ],
      imports: [ MaterialModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Content3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
