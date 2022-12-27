import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DataService {
  showForm: boolean = false;

  constructor() {}

  changeToggle() {
    return (this.showForm = !this.showForm);
  }
}
