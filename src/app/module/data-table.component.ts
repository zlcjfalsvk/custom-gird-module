import { Component, ContentChildren, QueryList, AfterViewInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ColumnDirective } from './columns/column.directive';
import { Enum } from 'src/app/module/columns/enum';

@Component({
    selector: 'app-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements AfterViewInit, OnChanges {


    columnsConfig: QueryList<ColumnDirective>;
    _rows: any[];

    dataType: typeof Enum.DataTye = Enum.DataTye;
    widthType: typeof Enum.WidthType = Enum.WidthType;

    @Output() myEvent: EventEmitter<any> = new EventEmitter();

    constructor() { }


    ngOnChanges() {
        if (typeof this._rows !== 'undefined') {

        }
    }

    ngAfterViewInit() {
        this.columnTemplates.changes.subscribe(v =>
            response => {
            }
        );
    }

    @Input() set rows(val: any) {
        this._rows = val;
        if (val) {
            this._rows = JSON.parse(val);
            this.columnsConfig.forEach(v => {
                if (v.keyName !== undefined && (v.keyName.includes('\.'))) {
                    const attr = v.keyName;
                    this.setRowData(this._rows, attr);
                }
            })
        }
    }

    @ContentChildren(ColumnDirective)
    set columnTemplates(val: QueryList<ColumnDirective>) {
        this.columnsConfig = val;
    }

    get columnTemplates(): QueryList<ColumnDirective> {
        return this.columnsConfig;
    }

    setRowData(row: any[], attr: string) {
        let _rows = row;
        _rows.map(v => {
            // v[attr] = eval('v.' + attr);            
            v[attr] = this.getProp(v, attr);
        });
        return _rows;
    }


    getProp(obj: any[], desc: string) {
        let arr = desc.split('.');
        while (arr.length) {
            obj = obj[arr.shift()];
        }
        return obj;
    }

    onClick(item, event) {
        const str: string = event.toggle;
        const hasParam = event.toggle.substring(str.indexOf('(') + 1, str.lastIndexOf(')'));
        if (hasParam) {
            const param = str.replace(hasParam, '\'' + this.getProp(item, hasParam).toString() + '\'');
            return this.myEvent.emit(param);
        }
        this.myEvent.emit(event.toggle);
    }
}
