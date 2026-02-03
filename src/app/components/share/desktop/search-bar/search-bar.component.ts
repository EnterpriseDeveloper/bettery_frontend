import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.sass"],
  imports: [CommonModule, FormsModule],
})
export class SearchBarComponent {
  searchWord = "";
  timeout: any;
  @Output() searchWordEmit = new EventEmitter();
  @Output() activeItemEmit = new EventEmitter();
  @Output() timelineActive = new EventEmitter();
  @Input() allAmountEvents: number;
  @Input() amount: number;
  @Input() active = "trending";
  constructor() {}

  changesActiveBtn(str): void {
    this.active = str;
    this.activeItemEmit.emit(this.active);
  }

  letsFindEvent() {
    if (this.timeout !== undefined) {
      clearTimeout(this.timeout);
    }

    this.timeout = setTimeout(() => {
      this.searchWordEmit.emit(this.searchWord);
    }, 300);
  }

  openFilter() {
    this.timelineActive.emit(true);
  }
}
