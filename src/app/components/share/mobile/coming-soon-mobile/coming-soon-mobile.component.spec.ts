import { ComponentFixture, TestBed } from "@angular/core/testing";
import { expect } from "chai";

import { ComingSoonMobileComponent } from "./coming-soon-mobile.component";

describe("ComingSoonComponent", () => {
  let component: ComingSoonMobileComponent;
  let fixture: ComponentFixture<ComingSoonMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComingSoonMobileComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComingSoonMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).to.exist;
  });
});
