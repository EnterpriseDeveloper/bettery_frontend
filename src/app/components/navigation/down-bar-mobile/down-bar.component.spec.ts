import { ComponentFixture, TestBed } from "@angular/core/testing";
import { expect } from "chai";
import { DownBarComponentMobile } from "./down-bar.component";

describe("DownBarComponent", () => {
  let component: DownBarComponentMobile;
  let fixture: ComponentFixture<DownBarComponentMobile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DownBarComponentMobile],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownBarComponentMobile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).to.be.ok;
  });
});
