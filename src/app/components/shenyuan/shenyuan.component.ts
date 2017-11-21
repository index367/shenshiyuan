import { Component, OnInit } from '@angular/core';
const Swiper = require('../../lib/swiper/swiper.min.js');

import { HttpService } from '../../http.service';

interface Member {
    id: string;
    login: string;
    avatar_url: string;
}

@Component({
    selector: 'ssy-shenyuan',
    templateUrl: './shenyuan.component.html',
    styleUrls: ['./shenyuan.component.less', '../../lib/swiper/swiper.min.css']
})

export class Shenyuan implements OnInit {
    componentName: string;

    member: Member[];

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
            // slidesPerView : 1,
            centeredSlides : true
        });
    }
}
