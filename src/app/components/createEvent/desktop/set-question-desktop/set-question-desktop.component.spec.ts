import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";
import { expect } from "chai";
import { SetQuestionDesktopComponent } from "./set-question-desktop.component";

describe("SetQuestionDesktopComponent", () => {
  let component: SetQuestionDesktopComponent;
  let fixture: ComponentFixture<SetQuestionDesktopComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SetQuestionDesktopComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetQuestionDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).to.be.ok;
  });
});
