import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {

  constructor(private fb: FormBuilder) { }
  
  public matcher = new MyErrorStateMatcher();
  
  public signupForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
  }, {
    asyncValidators: [],
    validators: []
  });

  onSubmit(): void {
    if (this.signupForm.valid) {
      console.log('OnSubmit, ', this.signupForm.value);
    } else {
      this.signupForm.markAllAsTouched();
    }
  }
}
