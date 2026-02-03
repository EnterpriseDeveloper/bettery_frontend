import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";
import { expect } from "chai";

import { SpinnerLoadingComponent } from "./spinner-loading.component";

describe("SppinerLoadingComponent", () => {
  let component: SpinnerLoadingComponent;
  let fixture: ComponentFixture<SpinnerLoadingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SpinnerLoadingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).to.exist;
  });
});
