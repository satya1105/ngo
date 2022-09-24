import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ManageComponent } from './manage/manage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SaleComponent } from './sale/sale.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DonationComponent } from './donation/donation.component';
import { OtherComponent } from './other/other.component';
import { RouteComponent } from './route/route.component';
import { ErrorhandlingComponent } from './errorhandling/errorhandling.component';
import { DropdownHanderComponent } from './dropdown-hander/dropdown-hander.component';
import { CheckBoxHandlerComponent } from './check-box-handler/check-box-handler.component';
import { ChatComponent } from './chat/chat.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { AnimationComponent } from './animation/animation.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    ManageComponent,
    DashboardComponent,
    SaleComponent,
    AboutusComponent,
    DonationComponent,
    OtherComponent,
    RouteComponent,
    ErrorhandlingComponent,
    DropdownHanderComponent,
    CheckBoxHandlerComponent,
    ChatComponent,
    FormValidationComponent,
    TopBarComponent,
    BottomBarComponent,
    AnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
