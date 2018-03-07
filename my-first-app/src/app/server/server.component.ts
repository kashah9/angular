import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit {

    // String interpolation 
    serverID: number = 10;
    serverStatus: string = 'offline';

    getSeverStatus(){
        return this.serverStatus;
    }

    allowNewServer = false;
    serverCreation = "Server not created!";
    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);  
    }
    ngOnInit() {
    } 

    onCreateServer(){
        this.serverCreation = "server created, yay!"
    }
}