import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../http.service';

interface Member {
    id: string;
    login: string;
    avatar_url: string;
}
interface ImgItem {
    height: number;
    width: number;
    content: string;
}

@Component({
    selector: 'ssy-shenyuan',
    templateUrl: './shenyuan.component.html',
    styleUrls: ['./shenyuan.component.less']
})

export class Shenyuan implements OnInit {
    componentName: string;
    imgList: ImgItem[];

    member: Member[];

    constructor(private httpService: HttpService) {
        this.componentName = 'shenyuan';
        this.imgList = [
            {
                height: 357,
                width: 207,
                content: '/assets/images/1.jpg'
            },
            {
                height: 357,
                width: 207,
                content: '/assets/images/2.jpg'
            },
            {
                height: 357,
                width: 207,
                content: '/assets/images/3.jpg'
            },
            {
                height: 357,
                width: 207,
                content: '/assets/images/4.jpg'
            },
            {
                height: 357,
                width: 207,
                content: '/assets/images/5.jpg'
            }
        ];
    }

    ngOnInit() {
        this.httpService.getMembers()
            .subscribe(data => {
                if (data) {
                    console.log('data:', data);
                }
            });
        let islider = new iSlider({
            data: this.imgList,
            dom: document.getElementById('animation-effect'),
            // isVertical: true,
            // isLooping: true,
            // isDebug: true,
            // isAutoplay: true,
            animateType: 'depth'
        });
    }
}
