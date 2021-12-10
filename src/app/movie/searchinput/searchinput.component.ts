import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'search-input',
  templateUrl: "./searchinput.component.html"
})
export class SearchInputComponent implements OnDestroy{

  @Output() searchValue: EventEmitter<string> = new EventEmitter();
  private _searchSubject: Subject<string> = new Subject()
  constructor() {
    this._setSearchSubscription();
  }
  public updateSearch(event:any) {
    this._searchSubject.next( event.target.value );
  }
  private _setSearchSubscription() {
    this._searchSubject.pipe(
      debounceTime(500)
    ).subscribe((searchValue: string) => {
      this.searchValue.emit( searchValue );
    });
  }
  ngOnDestroy() {
    this._searchSubject.unsubscribe();
  }
}
