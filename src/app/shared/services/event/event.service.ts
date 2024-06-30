import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private searchInputChangeSubject = new Subject<string>();
  searchInputChange$ = this.searchInputChangeSubject.asObservable();

  emitSearchInputChange(value: string): void {
    this.searchInputChangeSubject.next(value);
  }
}
