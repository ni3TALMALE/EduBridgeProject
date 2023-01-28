import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AboutComponent } from './components/about/about.component';
 import { AdminComponent } from './components/admin/admin.component';
import { AdminprofileComponent } from './components/adminprofile/adminprofile.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { DeleteuserComponent } from './components/deleteuser/deleteuser.component';
import { DestinationComponent } from './components/destination/destination.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { GuidesComponent } from './components/guides/guides.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MainComponent } from './components/main/main.component';
import { PackagesComponent } from './components/packages/packages.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterationComponent } from './components/registeration/registeration.component';
import { TicketbookingComponent } from './components/ticketbooking/ticketbooking.component';
import { TicketshowComponent } from './components/ticketshow/ticketshow.component';
import { UserComponent } from './components/user/user.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';


const routes: Routes = [
  {path:'', component:MainComponent},
  {path:'main', component:MainComponent},
  {path:'about', component:AboutComponent},
  {path:'login', 
    children: [{
      path: '',
      component:LoginComponent,
    },
    {path:':id', component:ProfileComponent},
    ]
  },
 
  {path:'logout', component:LogoutComponent},
  {path:'package', component:PackagesComponent},
  {path:'destination', component:DestinationComponent},
  {path:'guides', component:GuidesComponent},
  {path:'contacts', component:ContactsComponent},
  {path:'registeration', component:RegisterationComponent},
   {path:'admin', component:AdminComponent,canActivate:[AuthGuard]},
  {path:'updatepassword', component:ForgotpasswordComponent},
  {path:'deleteuser', component: DeleteuserComponent},
  {path:'profile', component: ProfileComponent},
  {path:'userprofile', component: UserprofileComponent},
  {path:'adminprofile', component: AdminprofileComponent},
  {path:'user', component: UserComponent,canActivate:[AuthGuard]},
  {path:'ticket', component: TicketbookingComponent,canActivate:[AuthGuard]},
  {path:'ticketshow', component: TicketshowComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent=[MainComponent, AboutComponent, LoginComponent, PackagesComponent,DestinationComponent,
  GuidesComponent,ContactsComponent,RegisterationComponent,AdminComponent,ForgotpasswordComponent,DeleteuserComponent,UserComponent,TicketbookingComponent]