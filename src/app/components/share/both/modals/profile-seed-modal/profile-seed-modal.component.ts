import { Component, Input, OnInit } from "@angular/core";
import { ClipboardService } from "ngx-clipboard";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-profile-seed-modal",
  templateUrl: "./profile-seed-modal.component.html",
  styleUrls: [
    "../../../../registration/auth/seed-phrase-modal/seed-phrase-modal.component.sass",
  ],
  imports: [CommonModule],
})
export class ProfileSeedModalComponent implements OnInit {
  @Input() seedPhrase: string;

  seedPhraseArr = [];

  showCopiedMessage = false;

  constructor(
    private _clipboardService: ClipboardService,
    private activeModal: NgbActiveModal,
  ) {}

  ngOnInit(): void {
    if (this.seedPhrase) {
      this.splitSeedPhrase(this.seedPhrase);
    }
  }

  closeModal() {
    this.activeModal.close();
  }

  splitSeedPhrase(str: string) {
    this.seedPhraseArr = str.split(" ");
  }

  copyToClipBoard() {
    if (this.seedPhrase) {
      this._clipboardService.copy(this.seedPhrase);
      this.showCopyMessage();
    }
  }

  showCopyMessage() {
    this.showCopiedMessage = true;
    setTimeout(() => {
      this.showCopiedMessage = false;
    }, 500);
  }
}
