import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Material design
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatTableModule, MatInputModule, MatCardModule, MatSelectModule, MatToolbarModule, MatDialogModule} from '@angular/material';

import { AppComponent } from './app.component';
import { EntriesComponent } from './entries/entries.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { EntryService } from './entry.service';
import { AppRouterModule } from './app-router.module';
import { HttpClientModule } from '@angular/common/http';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateEntryComponent } from './update-entry/update-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    FooterComponent,
    HeaderComponent,
    NewEntryComponent,
    UpdateEntryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouterModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatTableModule, MatInputModule, MatCardModule, MatSelectModule,
    MatToolbarModule, MatDialogModule,
    ReactiveFormsModule
  ],
  entryComponents: [UpdateEntryComponent],
  providers: [
    EntryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
