import { Component, Input } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { HomeComponent } from "../home/home.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  @Input() showMFunc: any;

  constructor(private data: DataService) {}

  currentActive: string = "home";

  handleActive(event: any) {
    this.currentActive = event.currentTarget.name;
  }
  handleMouseOver(e: any) {
    console.log(e.currentTarget);
  }
}
