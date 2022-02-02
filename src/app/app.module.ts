import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UppercaseComponent } from './buultin/uppercase/uppercase.component';
import { TabsModule} from 'ngx-bootstrap/tabs';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LowercaseComponent } from './buultin/lowercase/lowercase.component';
import { DatecomponentComponent } from './buultin/datecomponent/datecomponent.component';
import { TitlecaseComponent } from './buultin/titlecase/titlecase.component';

@NgModule({
  declarations: [
    AppComponent,
    UppercaseComponent,
    LowercaseComponent,
    DatecomponentComponent,
    TitlecaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabsModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
