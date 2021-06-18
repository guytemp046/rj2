import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventResolverService } from './resolvers/event-resolver.service';
import { VIEWS } from './views/views.module';

const routes: Routes = [
  {
    path: '',
    component: VIEWS.HomeComponent,
    resolve: {
      event: EventResolverService,
    },
    data: {
      meta: {
        title: 'Matchroom GO',
      },
    },
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
