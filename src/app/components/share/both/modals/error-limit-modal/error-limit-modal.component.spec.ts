import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";
import { expect } from "chai";

import { ErrorLimitModalComponent } from "./error-limit-modal.component";

describe("ErrorLimitModalComponent", () => {
  let component: ErrorLimitModalComponent;
  let fixture: ComponentFixture<ErrorLimitModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorLimitModalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorLimitModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).to.exist;
  });
});
