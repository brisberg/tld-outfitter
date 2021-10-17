import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {OutfitPanelComponent} from './outfit-panel/outfit-panel.component';
import { SlotIconComponent } from './slot-icon/slot-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    OutfitPanelComponent,
    SlotIconComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
