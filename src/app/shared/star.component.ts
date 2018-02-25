import { Component, OnChanges, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-star-rating',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    constructor() {

    }

    @Input() rating: number = 3;
    starWidth: number;

    ngOnChanges() {
        console.log('On Change fired');
        this.starWidth = this.rating * (86 / 5);
        console.log(this.starWidth);
    }
}
