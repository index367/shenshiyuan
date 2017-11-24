import { Injectable } from '@angular/core';
import { HttpInterceptorService } from './httpUtils.service';

@Injectable()
export class HttpService {
    constructor(private httpInterceptorService: HttpInterceptorService) { }

    getMembers(page: number, per_page: number) {
        // return this.http
        //     .get(`https://api.github.com/orgs/angular/members?page=1&per_page=5`)
        //     .map(res => res.json());
        return this.httpInterceptorService.request({
            method: 'get',
            url: `https://api.github.com/orgs/angular/members?page=${page}&per_page=${per_page}`,
        });
    }
}
