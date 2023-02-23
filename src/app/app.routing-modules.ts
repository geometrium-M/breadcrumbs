import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { ElementComponent } from './element/element.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [

    
       
        { path: '', component: MainComponent, 
            data: { breadcrumb: 'Main' },

            children: [
            {
                path: 'content',
                component: ContentComponent,
                data: {
                    breadcrumb: 'content'
                },
            },
        ] }, 
    

    {
        path: 'elements',
        component: ElementComponent,
        data: {
            breadcrumb: 'Elements'
        },
    },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
}
