import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateteacherComponent } from './createteacher.component';

describe('CreateteacherComponent', () => {
  let component: CreateteacherComponent;
  let fixture: ComponentFixture<CreateteacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateteacherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
