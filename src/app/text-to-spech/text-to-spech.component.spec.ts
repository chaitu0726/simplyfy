import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextToSpechComponent } from './text-to-spech.component';

describe('TextToSpechComponent', () => {
  let component: TextToSpechComponent;
  let fixture: ComponentFixture<TextToSpechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextToSpechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextToSpechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
