import { SanJoseComponent } from './san-jose/san-jose.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'san-jose',component: SanJoseComponent },
  { path: '', pathMatch: 'full', redirectTo: '/alpha' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
