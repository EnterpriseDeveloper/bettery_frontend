import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";
import { expect } from "chai";

import { WelcomePageComponent } from "./welcome-page.component";

describe("WelcomePageComponent", () => {
  let component: WelcomePageComponent;
  let fixture: ComponentFixture<WelcomePageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomePageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).to.exist;
  });
});
