import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../http.service';

interface Member {
    id: string;
    login: string;
    avatar_url: string;
}

@Component({
    selector: 'ssy-shenyuan',
    templateUrl: './shenyuan.component.html',
    styleUrls: ['./shenyuan.component.less']
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
    }
}
