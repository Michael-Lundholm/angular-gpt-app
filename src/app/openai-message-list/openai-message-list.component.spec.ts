import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenaiMessageListComponent } from './openai-message-list.component';

describe('OpenaiMessageListComponent', () => {
  let component: OpenaiMessageListComponent;
  let fixture: ComponentFixture<OpenaiMessageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenaiMessageListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenaiMessageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
