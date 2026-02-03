import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";
import { expect } from "chai";
import { MobilePlugPageComponent } from "./mobile-plug-page.component";

describe("MobilePlugPageComponent", () => {
  let component: MobilePlugPageComponent;
  let fixture: ComponentFixture<MobilePlugPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MobilePlugPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePlugPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).to.exist;
  });
});
