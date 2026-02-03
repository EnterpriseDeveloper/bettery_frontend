import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";
import { expect } from "chai";

import { FilterTimelineComponent } from "./filterTimeline.component";

describe("FilterTimelineComponent", () => {
  let component: FilterTimelineComponent;
  let fixture: ComponentFixture<FilterTimelineComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FilterTimelineComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).to.exist;
  });
});
