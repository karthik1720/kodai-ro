import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  name: string = "karthik";
  images: any[] = ["banner1.jpg", "banner2.jpg", "banner3.jpeg"];
  i: any = 0;
  newimg: any = this.images[0];
  changeImg() {
    if (this.i < this.images.length - 1) {
      this.i++;
    } else {
      this.i = 0;
    }
    this.newimg = this.images[this.i];
  }
}
