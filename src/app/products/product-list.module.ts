// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// This Module's Components
import { ProductListComponent } from './product-list.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ProductListComponent,
    ],
    exports: [
        ProductListComponent,
    ]
})
export class ProductListModule {

}
