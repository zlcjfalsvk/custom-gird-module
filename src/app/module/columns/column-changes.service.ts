import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class ColumnChangesService {
    private columnInputChanges = new Subject<undefined>();

    get columnInputChanges$(): Observable<undefined> {
        return this.columnInputChanges.asObservable();
    }

    onInputChange(): void {
        this.columnInputChanges.next();
    }

}
