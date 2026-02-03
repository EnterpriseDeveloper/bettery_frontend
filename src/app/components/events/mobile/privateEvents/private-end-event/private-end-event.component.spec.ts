import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";
import { expect } from "chai";
import { PrivateEndEventComponent } from "./private-end-event.component";

describe("PrivateEndEventComponent", () => {
  let component: PrivateEndEventComponent;
  let fixture: ComponentFixture<PrivateEndEventComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PrivateEndEventComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateEndEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).to.be.ok;
  });
});
