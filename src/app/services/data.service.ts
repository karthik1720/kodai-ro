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

  handlePos(p: any) {
    const pos = p.getClientRects()[0].y;
    console.log(p.getClientRects()[0].y);
    window.scrollTo({
      top: pos,
      left: 0,
      behavior: "smooth",
    });
  }
}
