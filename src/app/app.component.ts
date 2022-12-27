import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "kodai-ro";

  showModal: boolean = false;

  showMFunc = () => {
    console.log("first");
    this.showModal = !this.showModal;
  };
}
