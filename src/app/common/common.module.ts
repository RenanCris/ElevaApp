import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BlockUIModule } from 'ng-block-ui';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
    imports: [
        FormsModule,
        BlockUIModule.forRoot(),
        NgxSpinnerModule,
    ],
    exports: [],
    declarations: [],
    providers: [
     
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CommumModule { }
