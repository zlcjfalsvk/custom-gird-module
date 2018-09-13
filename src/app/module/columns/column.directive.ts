import { Directive, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Enum } from './enum';
import { ColumnChangesService } from './column-changes.service';


@Directive({
    selector: 'appDataTableColumn'
})
export class ColumnDirective implements OnChanges {

    @Input() name: string;
    @Input() keyName: string;
    @Input() width: number;
    @Input() widthType: Enum.WidthType;
    @Input() dataType: Enum.DataTye;

    @Input() toggle: EventEmitter<any> = new EventEmitter();


    // @Input() connectComponent: string; 

    constructor(private columnChangesService: ColumnChangesService) { }
    private isFirstChange = true;

    ngOnChanges() {
        if (this.isFirstChange) {
            this.isFirstChange = false;
        } else {
            this.columnChangesService.onInputChange();
        }
    }
}
