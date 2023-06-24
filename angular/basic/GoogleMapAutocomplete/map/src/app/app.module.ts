import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCdXBkcV7rut1b3uMqOU7jv5Dq1bFo1r1w',
      libraries: ['places'],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
