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
    itemCarousel: Carousel[];

    constructor(private httpService: HttpService) {
        this.componentName = 'shenyuan';
    }

    ngOnInit() {
        this.httpService.getMembers(1, 5)
            .then(result => {
                console.log(result);
            });
        this.itemCarousel = [
            {content: 'added_slide'},
            {content: 'added_slide'},
            {content: 'added_slide'},
            {content: 'added_slide'},
            {content: 'added_slide'}
        ];
        this.carousel = [
            {content: 'slide1'},
            {content: 'slide2'},
            {content: 'slide3'},
            {content: 'slide4'},
            {content: 'slide5'}
        ];
    }

    ngAfterViewInit() {
        const shenyuan_swiper = new Swiper('.swiper-container', {
            // effect : 'coverflow',
            slidesPerView: 1.4,
            centeredSlides: true,
            initialSlide: 0,
            observer: true, // 修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        });
    }

    addSwiper() {
        this.carousel = this.carousel.concat(this.itemCarousel);
    }
}
