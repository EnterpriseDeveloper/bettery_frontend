import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";
import { expect } from "chai";
import { CreateRoomDesktopComponent } from "./create-room-desktop.component";

describe("CreateRoomDesktopComponent", () => {
  let component: CreateRoomDesktopComponent;
  let fixture: ComponentFixture<CreateRoomDesktopComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CreateRoomDesktopComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRoomDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).to.be.ok;
  });
});
