import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(7)]],
    userName: ["Guest"] 
  });
  showAlert = false;
  constructor(private fb: FormBuilder, private router: Router) {}
  ngOnInit(): void {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      this.myForm.get('userName')!.setValue(storedUserName); // Set stored userName if exists
    }
  }

  campoNoEsValido(campo: string) {
    return (
      this.myForm.controls[campo].errors && this.myForm.controls[campo].touched
    );
  }

  get email() { return this.myForm.get('email'); }
  get password() { return this.myForm.get('password'); }

  login() {
    // Hardcoded user credentials
    const hardcodedEmail = 'test@example.com';
    const hardcodedPassword = 'Abc1234';
    const hardcodedUserName = 'Katherine Flores';

    if (this.email?.value === hardcodedEmail && this.password?.value === hardcodedPassword) {
      localStorage.setItem('userName', hardcodedUserName);
      this.router.navigate(['/']); // Navigate to home or any desired route
    } else {
      this.showAlert = true;
    }
  }
   
}