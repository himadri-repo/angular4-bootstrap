import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent {
    title: string = 'Product List';
}
