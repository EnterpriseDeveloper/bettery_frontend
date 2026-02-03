import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MobilePlugPageComponent } from "../mobile-plug-page/mobile-plug-page.component";

@Component({
  selector: "app-coming-soon",
  templateUrl: "./coming-soon.component.html",
  styleUrls: ["./coming-soon.component.sass"],
  imports: [CommonModule, MobilePlugPageComponent],
})
export class ComingSoonComponent implements OnInit {
  currentPath: string;
  isMobile: boolean;

  constructor() {
    this.currentPath = window.location.pathname;
    this.mobileCheck();
  }

  ngOnInit(): void {}

  mobileCheck() {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      this.isMobile = true;
    }
  }
}
