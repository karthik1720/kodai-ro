import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookademoComponent } from "./Components/bookademo/bookademo.component";
import { HomeComponent } from "./Components/home/home.component";
import { ProductsComponent } from "./Components/products/products.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", component: HomeComponent },

  { path: "demo", component: BookademoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
