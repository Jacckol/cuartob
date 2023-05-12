import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { NoFoundPageComponent } from './noFoundPage/no-found-page.component';

@NgModule({
    declarations: [
        AppComponent,
        PagesComponent,
        NoFoundPageComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
      AppRoutingModule,
        PagesModule,
      SharedModule,
        AuthModule
    ]
})
export class AppModule {}
