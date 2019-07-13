import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendIdComponent } from './friend-id.component';

describe('FriendIdComponent', () => {
  let component: FriendIdComponent;
  let fixture: ComponentFixture<FriendIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
