import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators, ValidatorFn } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  signInForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6),this.atLeastOneUppercase()]],
    });
  }




  atLeastOneUppercase(): ValidatorFn {
    return (control) => {
      const value: string = control.value || '';
      const hasUppercase = /[A-Z]/.test(value);
      const hasLowercase = /[a-z]/.test(value);
      const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value);
      
      if (hasUppercase && hasLowercase && hasSpecialChar) {
        return null; // All conditions met
      } else {
        return { requirementsNotMet: true }; // Return an error if any condition is not met
      }
    };
  }
  
}
