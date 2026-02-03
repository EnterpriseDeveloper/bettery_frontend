import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";
import { expect } from "chai";
import { MetaMaskModalComponent } from "./meta-mask-modal.component";

describe("MetaMaskModalComponent", () => {
  let component: MetaMaskModalComponent;
  let fixture: ComponentFixture<MetaMaskModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MetaMaskModalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaMaskModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).to.exist;
  });
});
