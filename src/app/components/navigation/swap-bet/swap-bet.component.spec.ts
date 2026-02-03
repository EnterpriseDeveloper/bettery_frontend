import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";
import { expect } from "chai";
import { SwapBetComponent } from "./swap-bet.component";

describe("SwapBetComponent", () => {
  let component: SwapBetComponent;
  let fixture: ComponentFixture<SwapBetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SwapBetComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapBetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).to.be.ok;
  });
});
