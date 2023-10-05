import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  myForm: FormGroup = this.fb.group({
    email: ['test1@test.com', [Validators.required, Validators.email]],
    password :['1234567',[Validators.required, Validators.minLength(7)]],
  })
  constructor(private fb: FormBuilder, private router: Router) { }

  campoNoEsValido( campo: string ){

    return this.myForm.controls[campo].errors && 
           this.myForm.controls[campo].touched;
  }
  onReset(): void {
    this.myForm.reset();
  }

  goToHome(){
    this.router.navigate(['']);
  }
}

