import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenaiSetupComponent } from './openai-setup.component';

describe('OpenaiSetupComponent', () => {
  let component: OpenaiSetupComponent;
  let fixture: ComponentFixture<OpenaiSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenaiSetupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenaiSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
