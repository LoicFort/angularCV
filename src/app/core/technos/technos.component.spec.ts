import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnosComponent } from './technos.component';

describe('TechnosComponent', () => {
  let component: TechnosComponent;
  let fixture: ComponentFixture<TechnosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TechnosComponent]
    });
    fixture = TestBed.createComponent(TechnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
