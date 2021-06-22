import {Component, Inject, LOCALE_ID, NgModule, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AdapterService} from "../adapter.service";
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBar} from "@angular/material/snack-bar";
import {formatNumber} from "@angular/common";

// import {LogService} from '../log.service';

@Component({
  selector: 'app-main-body',
  templateUrl: './price-calculator.component.html',
  styleUrls: ['./price-calculator.component.scss']
})


export class PriceCalculatorComponent implements OnInit {
  public form = this.fb.group({
    distance: this.fb.control('', Validators.required)
  });

  constructor(private fb: FormBuilder,
              private adapterService: AdapterService,
              private _snackBar: MatSnackBar,
              @Inject(LOCALE_ID) private locale: string,
  ) {
  }


  ngOnInit(): void {
  }

  onFormSubmit(): void {
    this.adapterService.priceForDistance(parseInt(this.form.value.distance)).subscribe(price => {
      this._snackBar.open("Dein Fahrpreis beträgt " + formatNumber(price, this.locale,"1.0-2")+ " €", "BUCHEN")
    });
  }


}
