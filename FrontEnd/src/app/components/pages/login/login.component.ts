import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!:FormGroup;
  isSubmited = false;
  constructor(private formBuilder:FormBuilder){ }

  ngOnInit(): void{
    this.loginForm = this.formBuilder.group({
      username:['', Validators.required],
      password:['', Validators.required]
    });
  }

  // makes it easier to call validators
  get formControl(){
    return this.loginForm.controls;
  }

  submit(){
    this.isSubmited = true;
    if(this.loginForm.invalid) return;

    // alert(`username: ${this.formControl.username.value},
    //        password: ${this.formControl.password.value}`)
  }
}
