import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';

import { Shenyuan } from './components/shenyuan/shenyuan.component';
import { Banbi } from './components/banbi/banbi.component';
import { Yuyan } from './components/yuyan/yuyan.component';
import { Wode } from './components/wode/wode.component';

export const routeConfig: Routes = [
    // {
    //     path: '',
    //     redirectTo: 'shenyuan',
    //     pathMatch: 'full'
    // },
    {
        path: 'shenyuan',
        component: Shenyuan
    },
    {
        path: 'banbi',
        component: Banbi
    },
    {
        path: 'yuyan',
        component: Yuyan
    },
    {
        path: 'wode',
        component: Wode
    },
    {   // Ag路由使用先配置，先匹配的原则，重定向或者404放最后
        path: '**',
        pathMatch: 'full',
        redirectTo: 'shenyuan'
    }
];

