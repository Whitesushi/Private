import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadoutnewComponent } from './lostlandraiders/loadoutnew/loadoutnew.component';
import { LoadoutviewComponent } from './lostlandraiders/loadoutview/loadoutview.component';
import { LostlandraidersComponent } from './lostlandraiders/lostlandraiders.component';
import { NavComponent } from './nav/nav.component';
import { PlayerprofileComponent } from './reincarnation/playerprofile/playerprofile.component';
import { ReincarnationComponent } from './reincarnation/reincarnation.component';
import { TwitchComponent } from './twitch/twitch.component';

const routes: Routes = [
  {path: '', component: NavComponent, children: [
    {path: 'twitch', component: TwitchComponent},
    {path: 'reincarnation', component: ReincarnationComponent},
    {path: 'reincarnationprofile/:id', component: PlayerprofileComponent},

    {path: 'lostland', component: LostlandraidersComponent},
    {path: 'lostland-loadout-new', component: LoadoutnewComponent},
    {path: 'lostland-loadout-view/:id', component: LoadoutviewComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
