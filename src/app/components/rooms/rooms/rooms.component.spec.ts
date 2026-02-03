import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";
import { expect } from "chai";

import { RoomsComponent } from "./rooms.component";

describe("RoomsComponent", () => {
  let component: RoomsComponent;
  let fixture: ComponentFixture<RoomsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RoomsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).to.exist;
  });
});
