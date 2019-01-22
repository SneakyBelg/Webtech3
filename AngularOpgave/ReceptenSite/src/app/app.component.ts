import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { receptenService } from './recepten.service';
import { stringify } from '@angular/core/src/util';
import { Recipe } from './recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReceptenSite';
  data: any[];
  addForm: FormGroup

  constructor(public receptenService: receptenService, public fb: FormBuilder) {
    this.initForm();
  }
  initForm(){
    this.addForm = this.fb.group({
      naam: [''], 
      aantalCalorieen: [''], 
      ingredienten: [''], 
      tijdNodig: ['']
    })
  }
  public addRecipe(addForm: FormGroup){
    this.receptenService.addRecipe(new Recipe(
      this.addForm.value.naam, 
      this.addForm.value.aantalCalorieen, 
      this.addForm.value.ingredienten, 
      this.addForm.value.tijdNodigs
      ));
  }
}
