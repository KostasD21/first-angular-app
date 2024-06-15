import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { OrdersRoutingModule } from "./orders-routing.module";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { OrdersComponent } from "./orders.component";

@NgModule({
    imports: [ CommonModule, FormsModule, SharedModule, OrdersRoutingModule ],
    declarations: [ OrdersComponent ]
})
export class OrdersModule { }