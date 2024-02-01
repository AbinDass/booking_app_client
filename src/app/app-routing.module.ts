import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './modules/landing/landing.component';

const routes: Routes = [
    {path:'',
    loadChildren:() => import('./modules/landing/landing.module').then((m) => m.LandingModule)
    },

    {path:'auth',
    loadChildren:() => import('./modules/auth/auth.module').then((m) => m.AuthModule)
    },

    {path:'admin',
    loadChildren:() => import('./modules/admin/admin.module').then((m) => m.AdminModule)
    },

    {path:'user',
    loadChildren:() => import('./modules/user/user.module').then((m) => m.UserModule)
    },

    {path:'bus',
    loadChildren:() => import('./modules/bus/bus.module').then((m) => m.BusModule)
    },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
