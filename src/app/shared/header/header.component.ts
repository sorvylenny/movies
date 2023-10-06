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
    console.log (this.userName)
  }

  getUserName() {
    this.userName = localStorage.getItem('userName'); 
  }

  destroySession() {
    localStorage.clear();
    this.userName=''
    this.router.navigate(['']);
  }
}

