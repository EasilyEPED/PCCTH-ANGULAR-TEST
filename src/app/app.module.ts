import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginService } from './services/login.service';
import { TableModule } from 'primeng/table';

import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MultiSelectModule } from 'primeng/multiselect';
import { AuthGuard } from './core/auth.guard';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ServicesModule } from './services/services.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServicesModule,
    SharedModule,
    TableModule,
    ButtonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MultiSelectModule,
    FormsModule,
    ReactiveFormsModule,
    PdfViewerModule,
    BlockUIModule,
    ProgressSpinnerModule,
    PaginationModule.forRoot(),
  ],
  providers: [LoginService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
