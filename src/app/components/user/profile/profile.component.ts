import { Component, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "../../../app.state";
import { User } from "../../../models/User.model";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { RegistrationComponent } from "../../registration/registration/registration.component";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MyPayoutsComponent } from "../my-payouts/my-payouts.component";
import { MyProfileComponent } from "../my-profile/my-profile.component";
import { MyReferralsComponent } from "../my-referrals/my-referrals.component";
import { selectUsers } from "../../../selectors/user.selector";

@Component({
  selector: "profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.sass"],
  imports: [
    CommonModule,
    FormsModule,
    MyPayoutsComponent,
    MyProfileComponent,
    MyReferralsComponent,
  ],
})
export class ProfileComponent implements OnDestroy {
  storeUserSubscribe: Subscription;
  userData: User = undefined;

  constructor(
    private store: Store<AppState>,
    private modalService: NgbModal,
    private router: Router,
  ) {
    this.storeUserSubscribe = this.store
      .select(selectUsers)
      .subscribe((x: User[]) => {
        if (x.length === 0) {
          let autoLogin = localStorage.getItem("_buserlog");
          if (autoLogin == null) {
            const modalRef = this.modalService.open(RegistrationComponent, {
              centered: true,
            });
            modalRef.componentInstance.openSpinner = true;
            modalRef.componentInstance.closedWindow.subscribe((e) => {
              this.router.navigate(["join"]);
            });
          }
        } else {
          this.userData = x[0];
        }
      });
  }

  ngOnDestroy() {
    if (this.storeUserSubscribe) {
      this.storeUserSubscribe.unsubscribe();
    }
  }
}
