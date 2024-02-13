import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { SigninComponent } from './signin/signin.component';
import { CartComponent } from './cart/cart.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
//import { UserLoginComponent } from './user-login/user-login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { RestListComponent } from './rest-list/rest-list.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { BootstrapmodalComponent } from './bootstrapmodal/bootstrapmodal.component';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule, Router, ROUTES } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
@NgModule({
  declarations: [
    AppComponent,
    //SigninComponent,
    CartComponent,
    NavComponent,
    SearchComponent,
    //UserLoginComponent,
    HomeComponent,
    AdminComponent,
    RestListComponent,
    EditAdminComponent,
    BootstrapmodalComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    //Router,RouterModule,
    ReactiveFormsModule,ModalModule.forRoot(),
    BrowserModule
  ],
  exports: [],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
