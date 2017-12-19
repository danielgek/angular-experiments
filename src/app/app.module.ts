import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TestBoxComponent } from './app.component';

export const customElements = [TestBoxComponent];

@NgModule({
  imports: [BrowserModule],
  declarations: customElements,
  entryComponents: customElements
})
export class AppModule {
  ngDoBootstrap() {}
}
