import { Component } from "@angular/core";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent {
  showDescription: Boolean = false;
  showDesc() {
    this.showDescription = !this.showDescription;
  }
}
