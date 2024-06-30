import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EventService } from './shared/services/event/event.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    /**
     * provendo o serviço com uma key para que os mfes consigam acessar via
     * constructor(@Inject('EVENT_SERVICE') private _eventService: EventService) {}
     */
    {
      provide: 'EVENT_SERVICE',
      useExisting: EventService,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
