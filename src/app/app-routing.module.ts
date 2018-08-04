import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';


const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { 
  
}
