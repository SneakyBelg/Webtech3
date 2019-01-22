import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from './recipe';

@Injectable({
    providedIn: 'root'
  })

export class receptenService {
    constructor() { }
    public addRecipe(recept: Recipe) {                
        let body = JSON.stringify({ recept });  
        if (recept.naam in localStorage){
            console.log("Recipe already added!");
        }
        else {
            localStorage.setItem(recept.naam.toString(), body);
            console.log("Recipe added!");
        }          
        
    }
  }