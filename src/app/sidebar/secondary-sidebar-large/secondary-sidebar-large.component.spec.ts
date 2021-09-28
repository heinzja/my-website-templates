import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/material/material.module';

import { SecondarySidebarLargeComponent } from './secondary-sidebar-large.component';

describe('SecondarySidebarLargeComponent', () => {
  let component: SecondarySidebarLargeComponent;
  let fixture: ComponentFixture<SecondarySidebarLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondarySidebarLargeComponent ],
      imports: [RouterTestingModule, MaterialModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondarySidebarLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
