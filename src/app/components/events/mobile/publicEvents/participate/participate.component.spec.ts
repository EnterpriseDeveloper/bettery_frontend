import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";
import { expect } from "chai";
import { ParticipateComponent } from "./participate.component";

describe("ParticipateComponent", () => {
  let component: ParticipateComponent;
  let fixture: ComponentFixture<ParticipateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ParticipateComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).to.be.ok;
  });
});
