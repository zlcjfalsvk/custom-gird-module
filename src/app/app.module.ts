import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataTableModule } from './module/data-table.module';
import { ApiService } from './apiService/api.service';
import { ColumnChangesService } from './module/columns/column-changes.service';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        DataTableModule
    ],
    providers: [
        ApiService,
        ColumnChangesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
