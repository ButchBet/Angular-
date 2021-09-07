import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './people/people-list/people-list.component';
import { PeopleComponent } from './people/people.component';

const routes: Routes = [
  {path: '', component: PeopleComponent},
  {path: 'people', component: PeopleComponent}
  // {path: 'people/add', component: People}

]

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [RoutingModule]
})
export class RoutingModule { }
