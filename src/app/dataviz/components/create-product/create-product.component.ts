import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICategory } from 'src/app/models/icategory';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit, OnDestroy {

  public productForm! : FormGroup;
  public optionsCat : ICategory[] = [
    {id : 1 , name : 'Fruit/Légume'},
    {id : 2 , name : 'Viande'},
    {id : 3 , name : 'Boisson'}
  ];
  constructor(private _fb : FormBuilder) { }

  ngOnDestroy(): void {
    console.log('Adieuuuuuu!');
    
  }

  ngOnInit(): void {
    console.log('Coucou!');
    this.productForm = this._fb.group({
      name : [null,[Validators.required, Validators.maxLength(50)]],
      description : [null,[Validators.maxLength(500)]],
      price : [null, [Validators.required, Validators.min(0)]],
      categoryId : [null, [Validators.required]]
    });
  }

  public onSubmit(){
    if(!this.productForm.valid) return;
    console.dir(this.productForm);
  }
}
