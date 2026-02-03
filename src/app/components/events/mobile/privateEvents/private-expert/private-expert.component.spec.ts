import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";
import { expect } from "chai";
import { PrivateExpertComponent } from "./private-expert.component";

describe("PrivateExpertComponent", () => {
  let component: PrivateExpertComponent;
  let fixture: ComponentFixture<PrivateExpertComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PrivateExpertComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).to.be.ok;
  });
});
