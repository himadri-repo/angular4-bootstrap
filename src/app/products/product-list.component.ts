import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent {
    title: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    products: any[] = [{
        Name: 'Product 1',
        Code: 'A001',
        IsAvailable: true,
        Price: 35.5,
        Rating: 4,
        ImageURL: 'https://openclipart.org/image/2400px/svg_to_png/247661/WomanInSaree5.png'
    }, {
        Name: 'Product 2',
        Code: 'A002',
        IsAvailable: true,
        Price: 30,
        Rating: 5,
        ImageURL: 'https://openclipart.org/image/2400px/svg_to_png/289835/croquis_from_americansystemof00merw.png'
    }, {
        Name: 'Product 3',
        Code: 'A003',
        IsAvailable: false,
        Price: 42,
        Rating: 3,
        ImageURL: 'https://openclipart.org/image/2400px/svg_to_png/261071/ManInCape.png'
    }, {
        Name: 'Product 4',
        Code: 'A004',
        IsAvailable: true,
        Price: 49,
        Rating: 2,
        ImageURL: 'https://openclipart.org/image/2400px/svg_to_png/283585/Farthingale2.png'
    }];

    toggleImage() {
        this.showImage = !this.showImage;
    }
}
