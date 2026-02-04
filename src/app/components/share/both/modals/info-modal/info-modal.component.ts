import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "info-modal",
  templateUrl: "./info-modal.component.html",
  styleUrls: ["./info-modal.component.sass"],
  imports: [CommonModule],
})
export class InfoModalComponent {
  @Input() boldName;
  @Input() name;
  @Input() name1;
  @Input() name2;
  @Input() link;

  constructor(public activeModal: NgbActiveModal) {}
}
