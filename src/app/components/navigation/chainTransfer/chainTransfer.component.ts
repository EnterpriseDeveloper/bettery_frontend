import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
} from "@angular/core";
import { Coins } from "../../../models/Coins.model";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Subscription } from "rxjs";
import { PostService } from "../../../services/post.service";
import { GetService } from "../../../services/get.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-deposit",
  templateUrl: "./chainTransfer.component.html",
  styleUrls: ["./chainTransfer.component.sass"],
  imports: [CommonModule, FormsModule],
})
export class ChainTransferComponent implements OnInit, OnDestroy {
  @Input() status: string;
  @Input() coinInfo: Coins;
  @Input() wallet: string;
  @Input() userId: number;
  @Output() updateBalance = new EventEmitter();

  inputValue: any = 0;
  error: string = undefined;
  spinner: boolean = false;
  avaliableCoins: string = undefined;
  withInitSub: Subscription;
  withExitSub: Subscription;

  receiveBTY: boolean;
  stillProcessed: boolean;

  constructor(
    public activeModal: NgbActiveModal,
    public postService: PostService,
    public getService: GetService,
  ) {}

  ngOnInit(): void {
    this.avaliableCoins =
      this.status == "deposit" ? this.coinInfo.MainBTY : this.coinInfo.BTY;
    if (this.status == "withdraw") {
      this.checkStatusOfWith();
    }
  }

  checkStatusOfWith() {
    this.withExitSub = this.getService.get("withdrawal/exit").subscribe(
      (x) => {
        // this.status = 'withdraw'
        // this.receiveBTY = true;
        // this.stillProcessed = false;   //for 3 screen
        // this.status = 'withdraw'
        // this.receiveBTY = true;
        // this.stillProcessed = true;   //for 4 screen
      },
      (err) => {
        console.log(err);
      },
    );
  }

  maxWithdraw() {
    this.inputValue = this.coinInfo.BTY;
  }

  maxDeposit() {
    this.inputValue = this.coinInfo.MainBTY;
  }

  async deposit() {
    if (this.inputValue > 0) {
      console.log("NOT IMPLEMENTED YET");
    } else {
      this.error = "Amount must be bigger that 0";
    }
  }

  async withdrawal() {
    if (this.inputValue > 0) {
      console.log("NOT IMPLEMENTED YET");
    } else {
      this.error = "Amount must be bigger that 0";
    }
  }

  async close() {
    this.activeModal.dismiss("Cross click");
  }

  ngOnDestroy() {
    if (this.withInitSub) {
      this.withInitSub.unsubscribe();
    }
    if (this.withExitSub) {
      this.withExitSub.unsubscribe();
    }
  }
}
