import { Injectable } from '@angular/core';
import { AdapterService} from "./adapter.service";
import {Entry} from "./models";

@Injectable({
  providedIn: 'root'
})
export class EntryService {


  constructor(private adapter: AdapterService) {
  }

  addEntry(entry: Entry): void {
    this.adapter.createAccount(entry).subscribe();
  }

}
