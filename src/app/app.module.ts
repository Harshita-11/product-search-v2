import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoService } from './service/demo1.service';
import { SearchFilterComponent } from './component/search-filter/search-filter.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MessageService } from './service/subscribemessage.service';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CardComponent } from './component/card/card.component';
import { FormatLabelPipe } from './pipes/format-label.pipe';
import { TabsComponent } from './component/tabs/tabs.component';
import { ProductSearchComponent } from './component/product-search/product-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LoginComponent } from './component/login/login.component';
import { ErrorComponent } from './component/error/error.component';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { DemoComponent } from './component/demo1.component';
import { SnackBarComponent } from './component/snack-bar/snack-bar.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ListDataResolver } from './service/resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchFilterComponent,
    CardComponent,
    FormatLabelPipe,
    TabsComponent,
    ProductSearchComponent,
    LoginComponent,
    ErrorComponent,
    DemoComponent,
    SnackBarComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    DemoService,
    MessageService,
    // ListDataResolver,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  entryComponents: [SnackBarComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
