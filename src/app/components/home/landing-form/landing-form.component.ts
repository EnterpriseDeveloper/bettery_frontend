import { Component, OnInit, OnDestroy } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Subscription } from "rxjs";

import emailjs, { EmailJSResponseStatus } from "emailjs-com";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-landing-form",
  templateUrl: "./landing-form.component.html",
  styleUrls: ["./landing-form.component.sass"],
  imports: [CommonModule, TranslateModule, ReactiveFormsModule],
})
export class LandingFormComponent implements OnInit, OnDestroy {
  form: FormGroup;
  submitted = false;
  sendMessage: boolean;
  recaptcaSub: Subscription;

  serviceID = "service_t9q4kx4";
  templateID = "template_xgnmhpr";
  userID = "user_GmCxmCvs7Xmy69fb0oH8i";

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      firstName: ["", Validators.required],
      phoneNumber: ["", Validators.required],
      firm: [""],
    });
  }

  get f() {
    return this.form.controls;
  }

  ngOnInit(): void {}

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs
      .sendForm(
        this.serviceID,
        this.templateID,
        e.target as HTMLFormElement,
        this.userID,
      )
      .then(
        (result: EmailJSResponseStatus) => {
          if (result.text === "OK") {
            this.submitted = false;
            this.form.controls.firstName.setValue("");
            this.form.controls.phoneNumber.setValue("");
            this.form.controls.firm.setValue("");
            this.sendMessage = true;
          }
        },
        (error) => {
          console.log(error.text);
        },
      );
  }

  sendForm(form: FormGroup, $event) {
    this.sendEmail($event);
    this.submitted = true;
  }
  removePlaceHolder($event) {
    $event.target.placeholder = "";
  }
  addPlaceHolder($event, holder: string) {
    $event.target.placeholder = holder;
  }

  ngOnDestroy() {
    if (this.recaptcaSub) {
      this.recaptcaSub.unsubscribe();
    }
  }
}
