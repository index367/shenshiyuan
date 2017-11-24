import { Component, OnInit, AfterViewInit } from '@angular/core';
const Swiper = require('../../lib/swiper/swiper.min.js');

import { HttpService } from '../../http.service';

interface Carousel {
    content: string;
}

@Component({
    selector: 'ssy-shenyuan',
    templateUrl: './shenyuan.component.html',
    styleUrls: ['./shenyuan.component.less', '../../lib/swiper/swiper.min.css']
})

export class Shenyuan implements OnInit, AfterViewInit {
    componentName: string;

    carousel: Carousel[];

    constructor(private httpService: HttpService) {
        this.componentName = 'shenyuan';
    }

    ngOnInit() {
        this.httpService.getMembers(1, 5)
            .then(result => {
                console.log(result);
            });
        this.carousel = [
            {content: 'slide1'},
            {content: 'slide2'},
            {content: 'slide3'},
            {content: 'slide4'},
            {content: 'slide5'}
        ];
    }

    ngAfterViewInit() {
        const swiper = new Swiper('.swiper-container', {
            // effect : 'coverflow',
            slidesPerView: 1.4,
            centeredSlides: true,
        });
    }
}
