import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

// Imporrto módulo de rutas
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [

  // path: '/dashboard'   PagesRouting
  // path: '/auth'        AuthRouting
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes, { useHash:true } ),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
