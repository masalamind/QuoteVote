import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersQuotesComponent } from './users-quotes.component';

describe('UsersQuotesComponent', () => {
  let component: UsersQuotesComponent;
  let fixture: ComponentFixture<UsersQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersQuotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
