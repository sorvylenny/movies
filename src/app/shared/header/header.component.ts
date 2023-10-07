import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  userName: any = "";

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getUserName();
  }

  /**
 * Retrieves the username from local storage.
 */
  getUserName() {
    this.userName = localStorage.getItem("userName");
  }

  /**
 * Destroys the current session and sets the username to "Guest".
 * Navigates to the home page ("/").
 */
  destroySession() {
    localStorage.setItem("userName", "Guest");
    this.userName = "Guest";
    this.router.navigate(["/"]);
  }

  /**
 * Navigates to the login page.
 */
  toLogin() {
    this.router.navigate(["./auth/login"]);
  }

  /**
 * Navigates to the home page ("/").
 */
  toHome() {
    this.router.navigate(["/"]);
  }
}
