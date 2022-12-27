import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./Components/header/header.component";
import { FooterComponent } from "./Components/footer/footer.component";
import { HomeComponent } from "./Components/home/home.component";
import { ProductsComponent } from "./Components/products/products.component";
import { BookademoComponent } from "./Components/bookademo/bookademo.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    BookademoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [HeaderComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
