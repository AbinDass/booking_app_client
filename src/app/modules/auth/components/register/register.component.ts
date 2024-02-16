import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ValidatorFn,
} from '@angular/forms';
import { AuthServiceService } from '../../auth-service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthServiceService
  ) {}

  ngOnInit(): void {
    //creating form group
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      sex: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          this.atLeastOneUppercase(),
        ],
      ],
      confirmPassword: ['', Validators.required, this.atLeastOneUppercase()],
      terms: [false, Validators.requiredTrue],
    });
  }

  submitRegisterForm() {
    const formData = new FormData();
    let name = this.registerForm?.value.name;
    let email = this.registerForm?.value.email;
    let sex = this.registerForm?.value.sex;
    let age = this.registerForm?.value.age;
    let password = this.registerForm?.value.password;
    console.log(this.registerForm?.value.name, 123);

    if (
      this.registerForm?.value.password ===
      this.registerForm?.value.confirmPassword
    ) {
      this.authService
        .userRegister({name,email,sex,age,password})
        .subscribe((data) => console.log(data));
    } else {
      alert(`form not valid`);
    }
  }

  //password validator
  atLeastOneUppercase(): ValidatorFn {
    return (control) => {
      const value: string = control.value || '';
      const hasUppercase = /[A-Z]/.test(value);
      const hasLowercase = /[a-z]/.test(value);
      const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(
        value
      );

      if (hasUppercase && hasLowercase && hasSpecialChar) {
        return null; // All conditions met
      } else {
        return { requirementsNotMet: true }; // Return an error if any condition is not met
      }
    };
  }
}
