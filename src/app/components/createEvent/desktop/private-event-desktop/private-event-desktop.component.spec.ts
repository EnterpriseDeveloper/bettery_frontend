import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";
import { expect } from "chai";
import { PrivateEventDesktopComponent } from "./private-event-desktop.component";

describe("PrivateEventDesktopComponent", () => {
  let component: PrivateEventDesktopComponent;
  let fixture: ComponentFixture<PrivateEventDesktopComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PrivateEventDesktopComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateEventDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).to.be.ok;
  });
});
