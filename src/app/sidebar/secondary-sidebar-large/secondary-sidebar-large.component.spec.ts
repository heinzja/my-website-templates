import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondarySidebarLargeComponent } from './secondary-sidebar-large.component';

describe('SecondarySidebarLargeComponent', () => {
  let component: SecondarySidebarLargeComponent;
  let fixture: ComponentFixture<SecondarySidebarLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondarySidebarLargeComponent ]
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
