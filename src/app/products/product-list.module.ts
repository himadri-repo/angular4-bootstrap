// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';

// This Module's Components
import { ProductListComponent } from './product-list.component';

@NgModule({
    imports: [
        FormsModule, CommonModule
    ],
    declarations: [
        ConvertToSpacesPipe, StarComponent, ProductListComponent,
    ],
    exports: [
        ProductListComponent,
    ]
})
export class ProductListModule {

}
