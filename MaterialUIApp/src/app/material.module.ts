import { NgModule } from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox"

import { materialize } from "rxjs";
@NgModule({
    imports : 
    [
        MatButtonModule,
        MatCheckboxModule
    ],
    exports : 
    [
        MatButtonModule,
        MatCheckboxModule

    ]
})
export class MaterailModule{

}