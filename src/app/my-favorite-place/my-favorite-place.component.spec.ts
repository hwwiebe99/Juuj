import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFavoritePlaceComponent } from './my-favorite-place.component';

describe('MyFavoritePlaceComponent', () => {
  let component: MyFavoritePlaceComponent;
  let fixture: ComponentFixture<MyFavoritePlaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyFavoritePlaceComponent]
    });
    fixture = TestBed.createComponent(MyFavoritePlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
