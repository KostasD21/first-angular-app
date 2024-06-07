import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CustomersComponent } from "./customers.component";
import { CustomersListComponent } from "./customers-list/customers-list.component";
import { FilterTextboxComponent } from "./customers-list/filter-textbox.component";

@NgModule({
    declarations: [ CustomersComponent, CustomersListComponent, FilterTextboxComponent ],
    exports: [ CustomersComponent, CustomersListComponent ],
    imports: [ CommonModule ]
})
export class CustomersModule { }