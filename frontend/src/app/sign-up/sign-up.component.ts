import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {AdapterService} from "../adapter.service";
import {EntryService} from "../entry.service";
import {formatNumber} from "@angular/common";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  hide = true;

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }
  //
  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

  public form = this.fb.group({
    vorname: new FormControl('', Validators.required),
    nachname: new FormControl('', Validators.required),
    passwort: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });


  constructor(private fb: FormBuilder,
              private entryService: EntryService,
  ) {
  }


  ngOnInit(): void {
  }

  onFormSubmit(): void {
    this.entryService.addEntry(this.form.value);
  }

}
