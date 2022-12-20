import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  show: boolean = false;
  showModal() {
    this.show = true;
    console.log(this.show);
  }
}
