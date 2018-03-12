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
    serverName: string = "Default";
    serverCreated = false;
    servers = ['TestServer', 'TestServer2'];
    getSeverStatus(){
        return this.serverStatus;
    }

    displayPara = false;

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
        this.servers.push(this.serverName);
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

    log = [];
    currentNumber = 0;
    onToggleDetails(){

        
        this.displayPara = !this.displayPara;
        // this.log.push(this.log.length + 1);

        this.log.push(this.currentNumber + 1);
        this.currentNumber += 1;
    }



    // Alternative solution of onToggleDetails() function

    // currentNumber = 0;
    // messages = [];
    // onDisplayDetails(): void {
    //     this.messages.push(this.currentNumber);
    //     this.currentNumber += 1;
    // }
}