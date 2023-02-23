import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ContentComponent } from './content/content.component';
import { AppRoutingModule } from './app.routing-modules';
import { ElementComponent } from './element/element.component';
import { MainComponent } from './main/main.component'; 


@NgModule({
    declarations: [
        AppComponent,
        BreadcrumbComponent,
        ContentComponent,
        ElementComponent,
        MainComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
