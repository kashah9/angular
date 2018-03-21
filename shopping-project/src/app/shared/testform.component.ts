import { OnInit, Component } from "@angular/core";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";

@Component({
    selector: 'test-form',
    templateUrl: './testform.component.html'
})
export class testformComponent {
    
    public submitted: boolean;
    testForm: FormGroup;
    post: any;
    firstName: string = '';
    description: string = '';

    // testForm = new FormGroup ({
    //     firstName: new FormControl(),
    //     password: new FormControl()
    // })

    constructor(private fb: FormBuilder){
        this.testForm = fb.group({
            'firstName': [null, Validators.required],
            'description': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(300)])]
        });
    }

    // You can call web service to store data of form. 
    addPost(post){
        this.description = post.description;
        this.firstName = post.firstName;
    }
}