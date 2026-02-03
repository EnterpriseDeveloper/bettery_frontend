import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EventFeedComponent } from "./eventFeed/eventFeed.component";
import { ShareModule } from "../../share/share.module";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { NavigationModule } from "../../navigation/navigation.module";
import { MobileEventsModule } from "../mobile/mobileEvents.module";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    EventFeedComponent,
    InfiniteScrollModule,
    RouterModule.forChild([{ path: "join", component: EventFeedComponent }]),
    ShareModule,
    NavigationModule,
    MobileEventsModule,
  ],
  exports: [],
})
export class DesktopEventsModule {}
