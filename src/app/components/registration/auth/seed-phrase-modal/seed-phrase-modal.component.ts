import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ClipboardService } from "ngx-clipboard";

@Component({
  selector: "app-seed-phrase-modal",
  templateUrl: "./seed-phrase-modal.component.html",
  styleUrls: ["./seed-phrase-modal.component.sass"],
  imports: [CommonModule, FormsModule],
})
export class SeedPhraseModalComponent implements OnInit, AfterViewInit {
  @Input() modalStatus: boolean;
  @Input() showSeedPhrase: { mnemonic: string; wallet: string };
  @Input() isCorrectPhrase: boolean;
  seedPhrase: string;
  @Output() okEmmit = new EventEmitter<object>();
  seedPhraseArr: string[];
  showCopiedMessage = false;
  @ViewChild("inputSeed") inputEl: ElementRef;

  constructor(private _clipboardService: ClipboardService) {}

  ngOnInit(): void {
    if (this.showSeedPhrase?.mnemonic) {
      this.splitSeedPhrase(this.showSeedPhrase.mnemonic);
    }
  }
  ngAfterViewInit() {
    this.inputEl.nativeElement.focus();
  }

  onInputFocus(focus: boolean) {
    if (focus) {
      this.inputEl.nativeElement.style.border = "1px solid #bcbcbc";
    } else {
      this.inputEl.nativeElement.style.border = "1px solid #f2f2f2";
    }
  }
  modalBtnAction(text: string) {
    if (this.seedPhrase) {
      if (text === "Ok") {
        this.okEmmit.emit({ btn: text, seedPh: this.seedPhrase });
      }
    }
    if (text !== "Ok") {
      this.okEmmit.emit({ btn: text, seedPh: this.showSeedPhrase });
    }
  }

  splitSeedPhrase(str: string) {
    this.seedPhraseArr = str.split(" ");
  }

  copyToClipBoard() {
    if (this.showSeedPhrase?.mnemonic) {
      this._clipboardService.copy(this.showSeedPhrase.mnemonic);
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
