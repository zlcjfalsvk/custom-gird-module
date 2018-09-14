import { Component, OnInit } from '@angular/core';
import { ApiService } from './apiService/api.service';
import { Enum } from './module/columns/enum';
import { FunctionCall } from '@angular/compiler';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'tableModule';
    data: any;

    dataType: typeof Enum.DataTye = Enum.DataTye;
    widthType: typeof Enum.WidthType = Enum.WidthType;

    // keys: any;

    constructor(private apiService: ApiService) {
        this.getData();
    }

    ngOnInit() {
    }

    setMethod(event: string) {
        try {
            console.log('eval에서 보낼 값 : ' + event);
            const method = event.substring(0, event.indexOf('('));
            const param = event.substring(event.indexOf('(') + 1 ,event.indexOf(')'));
            this[method](param);
        } catch (e) { }
    }

    onClick2(event) {
        console.log('eval에서 받은 값 : ' + event);
    }
    

    onClick(event) {
        console.log('받았다');
        console.log(event);
    }



    getData() {
        this.apiService.getData().subscribe(
            response => {
                this.data = response;
                this.data = JSON.stringify(this.data);
                // console.log('초기 데이타');
                // this.keys = Object.keys(this.data[0]);
                // console.log(this.keys);               
            },
            error => {

            }
        );
    }

}
