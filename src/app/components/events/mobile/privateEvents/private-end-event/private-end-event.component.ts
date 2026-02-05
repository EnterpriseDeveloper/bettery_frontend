import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "../../../../../app.state";
import { User } from "../../../../../models/User.model";
import { CommentComponent } from "../../../../share/both/comment/comment.component";
import { CommonModule } from "@angular/common";
import { selectUsers } from "../../../../../selectors/user.selector";

@Component({
  selector: "app-private-end-event",
  templateUrl: "./private-end-event.component.html",
  styleUrls: ["./private-end-event.component.sass"],
  imports: [CommonModule, CommentComponent],
})
export class PrivateEndEventComponent implements OnInit, OnDestroy {
  @Input() eventData: any;
  winners = [];
  losers = [];
  userSub: Subscription;
  award = "none";
  participatedIndex: number;
  userData: User;

  constructor(readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.userSub = this.store.select(selectUsers).subscribe((x: User[]) => {
      if (x.length != 0) {
        this.userData = x[0];
        this.letsFindActivites(x[0]._id);
      }
    });
    this.letsFindWinner();
  }

  letsFindActivites(id) {
    let find = this.eventData.parcipiantAnswers.find((o) => {
      return o.userId == id;
    });
    if (find) {
      if (find.answer == this.eventData.finalAnswerNumber) {
        this.award = "winner";
      } else {
        this.award = "loser";
      }
      this.participatedIndex = find.answer;
    }
  }

  letsFindWinner() {
    if (this.eventData.parcipiantAnswers) {
      for (let i = 0; i < this.eventData.parcipiantAnswers.length; i++) {
        if (
          this.eventData.parcipiantAnswers[i].answer ==
          this.eventData.finalAnswerNumber
        ) {
          this.winners.push(this.eventData.parcipiantAnswers[i]);
        } else {
          this.losers.push(this.eventData.parcipiantAnswers[i]);
        }
      }
    }
  }

  ngOnDestroy() {
    if (this.userSub) {
      this.userSub.unsubscribe();
    }
  }
}
