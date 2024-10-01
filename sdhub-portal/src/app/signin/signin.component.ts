import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit {
  signInForm!: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void{
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  OnSubmit(): void{
    if(this.signInForm.valid) {
      const {email, password} = this.signInForm.value;
      console.log('Sign-In Data:', {email});
    } else {
      console.log("Validation Failed")
    }
  }
}
