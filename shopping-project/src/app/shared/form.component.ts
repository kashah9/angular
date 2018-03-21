import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { User } from './user.interface';

@Component({
    moduleId: module.id,
    selector: 'form-control',
    templateUrl: './form.component.html',
})

export class FormComponent implements OnInit {
    public myForm: FormGroup; // our model driven form
    public submitted: boolean; // keep track on whether form is submitted
    public events: any[] = []; // use later to display form changes

    constructor(private _fb: FormBuilder) { } // form builder simplify form initialization

    ngOnInit() {
        // we will initialize our form model here
    }

    save(model: User, isValid: boolean) {
        this.submitted = true; // set form submit to true

        // check if model is valid
        // if valid, call API to save customer
        console.log(model, isValid);
    }
}