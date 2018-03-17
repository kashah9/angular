import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; // Import of Http service
import 'rxjs/add/operator/map';

interface UserResponse {
    login: string;
    company: string;
    location: string;
    followers: string;
}
@Injectable()
export class UserService {
    // Injecting Http service in class constructor
    constructor(private http: Http) {}

    // Angular 2.0 uses http whereas Angular 4.3.x and above uses httpclient
    getUser() {
        return this.http.get(`https://api.github.com/users/seeschweiler`)
            .map((response: Response) => response.json());
    }
}
