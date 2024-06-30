import { Component, EventEmitter, Output } from '@angular/core';
import { debounceTime, of } from 'rxjs';
import { EventService } from '../../services/event/event.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() searchInputEvent = new EventEmitter<string>();

  constructor(private eventService: EventService) {}
  
  onSearch(search: string) {
    this.searchInputEvent.emit(search);
    this.eventService.emitSearchInputChange(search);
  }
}
