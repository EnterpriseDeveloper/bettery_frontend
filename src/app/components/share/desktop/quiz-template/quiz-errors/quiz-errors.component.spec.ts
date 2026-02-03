import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";
import { expect } from "chai";

import { QuizErrorsComponent } from "./quiz-errors.component";

describe("QuizErrorsComponent", () => {
  let component: QuizErrorsComponent;
  let fixture: ComponentFixture<QuizErrorsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [QuizErrorsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).to.exist;
  });
});
