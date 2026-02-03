import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "quiz-info",
  templateUrl: "./quiz-info.component.html",
  styleUrls: ["./quiz-info.component.sass"],
  imports: [CommonModule],
})
export class QuizInfoComponent implements OnInit {
  @Input() joinPlayer: boolean;
  @Input() becomeExpert: boolean;
  @Output() goBack = new EventEmitter();
  @Output() agree = new EventEmitter();

  cancel() {
    this.goBack.next(null);
  }

  continue() {
    this.agree.next(null);
  }

  constructor() {}

  ngOnInit(): void {}
}
