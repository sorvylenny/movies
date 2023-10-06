import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName: any = ''; 

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Recuperar userName del localStorage
    this.getUserName();
    }

  getUserName() {
    this.userName = localStorage.getItem('userName'); 
  }

  destroySession() {
    localStorage.clear();
    this.userName=''
    this.router.navigate(['/']);
  }

  toLogin() {
   
    this.router.navigate(['./auth/login']);
  }

  toMovies() {
    
    this.router.navigate(['./allMovies']);
  }

  toTv() {
    
    
    this.router.navigate(['./allTv']);
  }

 toHome() {
    
    this.router.navigate(['/']);
  }
}

