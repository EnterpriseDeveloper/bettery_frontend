import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";
import { expect } from "chai";
import { BadRequestComponent } from "./bad-request.component";

describe("BadRequestComponent", () => {
  let component: BadRequestComponent;
  let fixture: ComponentFixture<BadRequestComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BadRequestComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).to.be.ok;
  });
});
