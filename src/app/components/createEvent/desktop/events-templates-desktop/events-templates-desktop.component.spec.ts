import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";
import { expect } from "chai";
import { EventsTemplatesDesktopComponent } from "./events-templates-desktop.component";

describe("EventsTemplatesDesktopComponent", () => {
  let component: EventsTemplatesDesktopComponent;
  let fixture: ComponentFixture<EventsTemplatesDesktopComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EventsTemplatesDesktopComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsTemplatesDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).to.be.ok;
  });
});
