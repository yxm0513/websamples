import { Component } from "@angular/core";
import {
  AuthService,
  SocialUser,
  GoogleLoginProvider,
  FacebookLoginProvider,
  LinkedinLoginProvider,
} from "ng4-social-login";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "social-login";

  public user: any = SocialUser;

  constructor(private socialAuthService: AuthService) {}

  facebookLogin() {
    console.log("facebook");
    this.socialAuthService
      .signIn(FacebookLoginProvider.PROVIDER_ID)
      .then((userDate) => {
        this.user = userDate;
      });
  }

  googleLogin() {
    console.log("google");

    this.socialAuthService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((userDate) => {
        this.user = userDate;
      });
  }

  linkedInLogin() {
    console.log("linked");

    this.socialAuthService
      .signIn(LinkedinLoginProvider.PROVIDER_ID)
      .then((userDate) => {
        this.user = userDate;
      });
  }
}
