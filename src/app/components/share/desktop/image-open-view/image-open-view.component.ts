import { Component, HostListener, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-image-open-view",
  templateUrl: "./image-open-view.component.html",
  styleUrls: ["./image-open-view.component.sass"],
})
export class ImageOpenViewComponent {
  @Input() imageSrc: string;

  @HostListener("document:keyup.escape") onKeydownHandler() {
    const modalBackground = document.getElementsByClassName(
      "background-modal-none",
    )[0];
    if (modalBackground) {
      modalBackground.classList.remove("background-modal-none");
      this.activeModal.close();
    }
  }

  constructor(public activeModal: NgbActiveModal) {}
}
