import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table.component';
import { ColumnDirective } from './columns/column.directive';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        DataTableComponent,
        ColumnDirective
    ],
    declarations: [
        DataTableComponent,
        ColumnDirective,
    ]
})
export class DataTableModule { }
