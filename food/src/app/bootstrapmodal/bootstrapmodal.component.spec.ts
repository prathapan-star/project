import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapmodalComponent } from './bootstrapmodal.component';

describe('BootstrapmodalComponent', () => {
  let component: BootstrapmodalComponent;
  let fixture: ComponentFixture<BootstrapmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BootstrapmodalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BootstrapmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
