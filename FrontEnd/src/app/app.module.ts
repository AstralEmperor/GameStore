import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { StoreComponent } from './components/pages/store/store.component';
import { TagsComponent } from './components/partials/tags/tags.component';
import { BuyButtonComponent } from './components/partials/buttons/buy-button/buy-button.component';
import { AddToLibraryButtonComponent } from './components/partials/buttons/add-to-library-button/add-to-library-button.component';
import { RatingComponent } from './components/partials/rating/rating.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { StorePartCategoryComponent } from './components/partials/store-part-category/store-part-category.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoreComponent,
    TagsComponent,
    BuyButtonComponent,
    AddToLibraryButtonComponent,
    RatingComponent,
    FooterComponent,
    StorePartCategoryComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-bottom-right',
      newestOnTop:false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
