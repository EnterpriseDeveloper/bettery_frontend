import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[numeric]",
})
export class NumericDirective {
  @Input("decimals") decimals: number = 0;

  private check(value: string, decimals: number) {
    if (decimals <= 0) {
      return String(value).match(new RegExp(/^\d+$/));
    } else {
      var regExpString =
        "^\\s*((\\d+(\\.\\d{0," +
        decimals +
        "})?)|((\\d*(\\.\\d{1," +
        decimals +
        "}))))\\s*$";
      return String(value).match(new RegExp(regExpString));
    }
  }

  private specialKeys = [
    "Backspace",
    "Tab",
    "End",
    "Home",
    "ArrowLeft",
    "ArrowRight",
    "Delete",
  ];

  constructor(private el: ElementRef) {}
}
