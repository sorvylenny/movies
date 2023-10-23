import { Component,  Input, OnInit} from "@angular/core";
import { Router } from "@angular/router";



@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @Input() userName: string = 'Guest';
  
  constructor(private router: Router) {}

  ngOnInit(): void {
  this.getUserName();
    
  }
 
  /**
 * Retrieves the username from local storage.
 */
  getUserName() {
    const storedUserName = localStorage.getItem('userName');
      if (storedUserName) {
        console.log('userName updated', storedUserName); 
      this.userName = storedUserName;
     
    }
  }

  /**
 * Destroys the current session and sets the username to "Guest".
 * Navigates to the home page ("/").
 */
  destroySession() {
    localStorage.setItem("userName", "Guest");
    this.userName = "Guest";
    this.router.navigate(['/']);
  }

  /**
 * Navigates to the login page.
 */
  toLogin() {
    this.router.navigate(['./auth/login']);
  }
  toAllMovies() {
    this.router.navigate(['/allMovies']);
  }
  toAllTv() {
    this.router.navigate(['/allTv']);
  }

  /**
 * Navigates to the home page ("/").
 */
  toHome() {
    this.router.navigate(['/']);
  }
}
