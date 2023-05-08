import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StriatonPage } from './striaton.page';

describe('StriatonPage', () => {
  let component: StriatonPage;
  let fixture: ComponentFixture<StriatonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StriatonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
