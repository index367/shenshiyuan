import { Component, OnInit } from '@angular/core';
const Swiper = require('../../lib/swiper/swiper.min.js');

import { HttpService } from '../../http.service';

interface Carousel {
    url: string;
}

@Component({
    selector: 'ssy-shenyuan',
    templateUrl: './shenyuan.component.html',
    styleUrls: ['./shenyuan.component.less', '../../lib/swiper/swiper.min.css']
})

export class Shenyuan implements OnInit {
    componentName: string;

    carousel: Carousel[];

    constructor(private httpService: HttpService) {
        this.componentName = 'shenyuan';
    }

    ngOnInit() {
        this.httpService.getMembers()
            .subscribe(data => {
                if (data) {
                    console.log('data:', data);
                }
            });
        const swiper = new Swiper('.swiper-container', {
            effect : 'coverflow',
            slidesPerView: 1.4,
            centeredSlides: true,
        });
    }
}
