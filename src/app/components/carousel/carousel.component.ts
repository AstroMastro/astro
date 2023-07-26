import { Component, OnInit } from '@angular/core';
import {
    Carousel,
    initTE,
} from "tw-elements";

@Component({
    selector: 'carousel',
    templateUrl : './carousel.component.html',
})
export class CarouselComponent implements OnInit {

    ngOnInit(): void {
        initTE({ Carousel });
    }

}