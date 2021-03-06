import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    moduleId: module.id,
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {
    // private _productService: ProductService;
    constructor(private _productService: ProductService) {
        // this.filteredProducts = this.products;
        // this.listFilter = 'product';
        // this._productService = productService;

        // console.log(this._productService);
        // this.products = this._productService.getProducts();
    }

    title = 'Product List';
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;
    errorMessage = '';
    // listFilter: string = 'product';

    _listFilter = '';
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(lstFilter: string) {
        this._listFilter = lstFilter;
        this.filteredProducts = (this._listFilter != null && this._listFilter !== '') ?
                    this.performFilter(this._listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [];
    // [{
    //     ID: 1,
    //     Name: 'Product 1',
    //     Code: 'GRM-A001',
    //     IsAvailable: true,
    //     Price: 35.5,
    //     Rating: 4.4,
    //     ImageURL: 'https://openclipart.org/image/2400px/svg_to_png/247661/WomanInSaree5.png'
    // }, {
    //     ID: 1,
    //     Name: 'Product 2',
    //     Code: 'GRM-A002',
    //     IsAvailable: true,
    //     Price: 30,
    //     Rating: 4.9,
    //     ImageURL: 'https://openclipart.org/image/2400px/svg_to_png/289835/croquis_from_americansystemof00merw.png'
    // }, {
    //     ID: 1,
    //     Name: 'Product 3',
    //     Code: 'TOY-A003',
    //     IsAvailable: false,
    //     Price: 42,
    //     Rating: 3.2,
    //     ImageURL: 'https://openclipart.org/image/2400px/svg_to_png/261071/ManInCape.png'
    // }, {
    //     ID: 1,
    //     Name: 'Product 4',
    //     Code: 'FOOD-A004',
    //     IsAvailable: true,
    //     Price: 49,
    //     Rating: 2.5,
    //     ImageURL: 'https://openclipart.org/image/2400px/svg_to_png/283585/Farthingale2.png'
    // }];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    OnRatingClicked(args): void {
        console.log(`Rating clicked and captured at parent: ${args}`);
    }

    private performFilter(productText: string): IProduct[] {
        productText = productText.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => {
            return (product.Name.toLocaleLowerCase().indexOf(productText) > -1 ||
                product.Code.toLocaleLowerCase().indexOf(productText) > -1);
        });
    }

    ngOnInit(): void {
        console.log('OnInit of ProductListComponent executed');
        this._productService.getProducts()
                    .subscribe(products => {
                            this.products = products;
                            this.filteredProducts = this.products;
                            this.listFilter = '';
                            console.log(`# of Products ${this.products.length}`);
                        }, error => this.errorMessage = error);
    }
}
