import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ToastrModule } from 'ngx-toastr';
import { TwitchComponent } from './twitch/twitch.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReincarnationComponent } from './reincarnation/reincarnation.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PlayerprofileComponent } from './reincarnation/playerprofile/playerprofile.component';
import { MatCardModule } from '@angular/material/card';
import { LostlandraidersComponent } from './lostlandraiders/lostlandraiders.component';
import { LoadoutnewComponent } from './lostlandraiders/loadoutnew/loadoutnew.component';
import { LoadoutlistComponent } from './lostlandraiders/loadoutlist/loadoutlist.component';
import { LoadoutviewComponent } from './lostlandraiders/loadoutview/loadoutview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TwitchComponent,
    ReincarnationComponent,
    PlayerprofileComponent,
    LostlandraidersComponent,
    LoadoutnewComponent,
    LoadoutlistComponent,
    LoadoutviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    MatGridListModule,
    MatTooltipModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
