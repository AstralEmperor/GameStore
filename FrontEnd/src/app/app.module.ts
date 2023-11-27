import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { StoreComponent } from './components/pages/store/store.component';
import { NewComponent } from './components/partials/recomCard/reccCard.component';
import { TagsComponent } from './components/partials/tags/tags.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoreComponent,
    NewComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
