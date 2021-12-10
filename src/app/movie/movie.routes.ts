import { Routes } from "@angular/router";
import { MovielistComponent } from "./movielist/movielist.component";


export const movieRoutes:Routes =[
    {path:'',component:MovielistComponent,pathMatch:'full'}
]