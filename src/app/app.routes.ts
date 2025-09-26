import { Routes } from '@angular/router';
import { Page2 } from './page2/page2';
import { Page1 } from './page1/page1';
import { Page3 } from './page3/page3';
import { Page4 } from './page4/page4';
import { authGuard } from './guards/auth-guard';
import { Page5 } from './page5/page5';


export const routes: Routes = [
    { path: 'page1', component: Page1 },
    { path: 'page2', component: Page2,
        canActivate: [authGuard],
     },
    { path: 'page3', component: Page3,   
      children: [
         { path: 'page4', component: Page4, outlet: 'p4' },
         { path: 'page5', component: Page5, outlet: 'p4' }
      ]
    },
];
