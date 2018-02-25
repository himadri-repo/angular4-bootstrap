// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';

// This Module's Components
import { ProductListComponent } from './product-list.component';

@NgModule({
    imports: [
        FormsModule, CommonModule
    ],
    declarations: [
        ConvertToSpacesPipe, ProductListComponent,
    ],
    exports: [
        ProductListComponent,
    ]
})
export class ProductListModule {

}
