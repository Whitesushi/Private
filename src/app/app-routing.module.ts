import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ReincarnationComponent } from './reincarnation/reincarnation.component';
import { TwitchComponent } from './twitch/twitch.component';

const routes: Routes = [
  {path: '', component: NavComponent, children: [
    {path: 'twitch', component: TwitchComponent},
    {path: 'reincarnation', component: ReincarnationComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
