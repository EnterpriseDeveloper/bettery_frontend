import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";
import { expect } from "chai";

import { QuizEventFinishComponent } from "./quiz-event-finish.component";

describe("QuizEventFinishComponent", () => {
  let component: QuizEventFinishComponent;
  let fixture: ComponentFixture<QuizEventFinishComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [QuizEventFinishComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizEventFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).to.exist;
  });
});
