import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {

    // String interpolation 
    serverID: number = 10;
    serverStatus: string = 'offline';

    getSeverStatus(){
        return this.serverStatus;
    }
}