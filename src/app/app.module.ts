import "../polyfills";
import { bootstrapApplication } from "@angular/platform-browser";
import { importProvidersFrom } from "@angular/core";
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";
import { provideStore } from "@ngrx/store";
import { provideRouter, withInMemoryScrolling } from "@angular/router";
import { ClipboardModule } from "ngx-clipboard";

import { userReducer } from "./reducers/user.reducer";
import { coinsReducer } from "./reducers/coins.reducer";
import { createEventReducer } from "./reducers/newEvent.reducer";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ErcCoinSaleComponent } from "./components/erc-coin-sale/erc-coin-sale.component";
import { RoomsComponent } from "./components/rooms/rooms/rooms.component";
import { provideTranslateService } from "@ngx-translate/core";
import { provideTranslateHttpLoader } from "@ngx-translate/http-loader";
import { NgxTypedJsModule } from "ngx-typed-js";
import { AuthInterceptor } from "./services/auth/auth.interceptor";
import { reputationReducer } from "./reducers/reputation.reducer";
import { PrivacyPolicyComponent } from "./components/documents/privacy-policy/privacy-policy.component";
import { ProfileComponent } from "./components/user/profile/profile.component";
import { AuthComponent } from "./components/registration/auth/auth.component";
import { ComingSoonComponent } from "./components/share/desktop/coming-soon/coming-soon.component";
import { RoomDetailsComponent } from "./components/rooms/room-details/room-details.component";

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    provideRouter(
      [
        { path: "", component: HomeComponent },
        { path: "tokensale", component: ErcCoinSaleComponent },
        { path: "privacy-policy", component: PrivacyPolicyComponent },
        { path: "join", component: RoomsComponent },
        { path: "auth", component: AuthComponent },
        { path: "rooms", component: RoomsComponent },
        { path: "host", component: ComingSoonComponent },
        { path: "my-events", component: ComingSoonComponent },
        { path: "profile", component: ProfileComponent },
        { path: "friends", component: ComingSoonComponent },
        { path: "help", component: ComingSoonComponent },
        { path: "profile", component: ProfileComponent },
        { path: "room/:id", component: RoomDetailsComponent },
      ],
      withInMemoryScrolling({
        scrollPositionRestoration: "enabled",
        anchorScrolling: "enabled",
      }),
    ),
    provideStore({
      user: userReducer,
      coins: coinsReducer,
      createEvent: createEventReducer,
      reputation: reputationReducer,
    }),
    provideHttpClient(),
    provideTranslateService({
      lang: "en",
      fallbackLang: "en",
      loader: provideTranslateHttpLoader({
        prefix: "./files/locale/",
        suffix: ".json",
      }),
    }),

    importProvidersFrom(
      NgbModule,
      ClipboardModule,
      NgxTypedJsModule,
      FormsModule,
      ReactiveFormsModule,
    ),
  ],
}).catch((err) => console.error(err));
