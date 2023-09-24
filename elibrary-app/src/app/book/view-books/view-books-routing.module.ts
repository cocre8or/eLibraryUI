import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ViewBooksComponent } from "./view-books.component";

const routes: Routes = [
{
    path: '', component: ViewBooksComponent
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewBooksRoutingModule { }