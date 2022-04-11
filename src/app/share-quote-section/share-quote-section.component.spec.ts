import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareQuoteSectionComponent } from './share-quote-section.component';

describe('ShareQuoteSectionComponent', () => {
  let component: ShareQuoteSectionComponent;
  let fixture: ComponentFixture<ShareQuoteSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareQuoteSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareQuoteSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
