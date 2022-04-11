import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserQuoteSectionComponent } from './user-quote-section.component';

describe('UserQuoteSectionComponent', () => {
  let component: UserQuoteSectionComponent;
  let fixture: ComponentFixture<UserQuoteSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserQuoteSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserQuoteSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
