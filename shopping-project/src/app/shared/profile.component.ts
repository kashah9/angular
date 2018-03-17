import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
    constructor(private userService: UserService) { }
    profile = {};
    loadUser() {
        this.userService.getUser().subscribe(data => this.profile = data);
    }
    ngOnInit() {

    }
}
