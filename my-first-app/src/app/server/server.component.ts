import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    .online {
        color: white;
    }`]
})
export class ServerComponent implements OnInit {

    // String interpolation 
    serverID: number = 10;
    serverStatus: string = 'offline';
    serverName: String = "Default";
    serverCreated = false;
    getSeverStatus(){
        return this.serverStatus;
    }

    allowNewServer = false;
    serverCreation = "Server not created!";
    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);  

        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }
    ngOnInit() {
    } 

    onCreateServer(){
        this.serverCreation = "server created, yay!"
        this.serverCreated = true;
    }
    // Event binding example
    onUpdateServerName(event: Event) {
        console.log(event);
        this.serverName = (<HTMLInputElement>event.target).value;
    }

    getColor(){
        if(this.serverStatus === 'online')
            return 'green'; 
        return 'red';
    }
}