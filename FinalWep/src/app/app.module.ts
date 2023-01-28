import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
//import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
//import { AboutComponent } from './components/about/about.component';
import { HttpClientModule } from '@angular/common/http';
// import { GuidesComponent } from './components/guides/guides.component';
//import { DestinationComponent } from './components/destination/destination.component';
//import { PackagesComponent } from './components/packages/packages.component';
//import { ContactsComponent } from './components/contacts/contacts.component';
//import { LoginComponent } from './components/login/login.component';
//import { RegisterationComponent } from './components/registeration/registeration.component';
//import { AdminComponent } from './components/admin/admin.component';
//import { NavloginComponent } from './components/navlogin/navlogin.component';
//import { TicketbookingComponent } from './components/ticketbooking/ticketbooking.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './components/logout/logout.component';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { NavloginComponent } from './components/navlogin/navlogin.component';
import { TicketshowComponent } from './components/ticketshow/ticketshow.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { AdminprofileComponent } from './components/adminprofile/adminprofile.component';
// import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
//import { UserComponent } from './components/user/user.component';
//import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
//import { DeleteuserComponent } from './components/deleteuser/deleteuser.component';
@NgModule({
  declarations: [
    AppComponent,
     NavbarComponent,
    // MainComponent,
     FooterComponent,
    // AboutComponent,
    RoutingComponent,
    LogoutComponent,
    NavloginComponent,
    TicketshowComponent,
    ProfileComponent,
    UserprofileComponent,
    AdminprofileComponent,
    //UserComponent,
    // GuidesComponent,
    // DestinationComponent,
    // PackagesComponent,
    // ContactsComponent,
    // LoginComponent,
    // RegisterationComponent,
    // AdminComponent,
    // NavloginComponent,
    // TicketbookingComponent,
    // ForgotpasswordComponent,
    // DeleteuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BackButtonDisableModule.forRoot({
      preserveScrollPosition: true
    }), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
