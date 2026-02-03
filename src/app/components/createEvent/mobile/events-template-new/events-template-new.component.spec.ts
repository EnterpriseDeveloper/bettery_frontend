import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";
import { expect } from "chai";
import { EventsTemplateNewComponent } from "./events-template-new.component";

describe("EventsTemplateNewComponent", () => {
  let component: EventsTemplateNewComponent;
  let fixture: ComponentFixture<EventsTemplateNewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EventsTemplateNewComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsTemplateNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).to.be.ok;
  });
});
