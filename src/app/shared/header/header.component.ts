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

  getUserName() {
    this.userName = localStorage.getItem("userName");
  }

  destroySession() {
    localStorage.setItem("userName", "Guest");
    this.userName = "Guest";
    this.router.navigate(["/"]);
  }

  toLogin() {
    this.router.navigate(["./auth/login"]);
  }

  toHome() {
    this.router.navigate(["/"]);
  }
}
