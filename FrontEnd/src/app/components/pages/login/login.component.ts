import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!:FormGroup;
  isSubmited = false;
  returnUrl = '';
  constructor(private formBuilder:FormBuilder, private userService:UserService, private activatedRoute: ActivatedRoute, private router:Router){ }

  ngOnInit(): void{
    this.loginForm = this.formBuilder.group({
      username:['', Validators.required],
      password:['', Validators.required]
    });
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  }

  // makes it easier to call validators
  get formControl(){
    return this.loginForm.controls;
  }

  submit(){
    this.isSubmited = true;
    if(this.loginForm.invalid) return;

    this.userService.login({username: this.formControl.username.value,
                            password: this.formControl.password.value}).subscribe(() => {
                             this.router.navigateByUrl(this.returnUrl);
                   });
  }
}
