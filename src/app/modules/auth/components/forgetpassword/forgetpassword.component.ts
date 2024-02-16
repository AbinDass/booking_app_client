import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit{
  forgotForm!: FormGroup;
  constructor(private fb: FormBuilder) {}
ngOnInit(): void {
  this.forgotForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  })
}

}