import { Component, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-image-open-view",
  templateUrl: "./image-open-view.component.html",
  styleUrls: ["./image-open-view.component.sass"],
})
export class ImageOpenViewComponent {
  @Input() imageSrc: string;

  constructor(public activeModal: NgbActiveModal) {}
}
