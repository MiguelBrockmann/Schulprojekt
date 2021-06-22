import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  hide = true;
  public form = this.fb.group({
    passwort: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });


  constructor(private fb: FormBuilder,
              private router: Router,) {
  }

  ngOnInit(): void {
  }


  onFormSubmit(): void {
    this.router.navigate(["price-calculator"])
  }
}
