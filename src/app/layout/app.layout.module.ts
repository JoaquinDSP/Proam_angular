import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { AppMenuComponent } from './app.menu.component';
import { AppMenuitemComponent } from './app.menuitem.component';
import { AppTopBarComponent } from './app.topbar.component';
import { AppFooterComponent } from './app.footer.component';
import { AppConfigModule } from './config/config.module';
import { AppSidebarComponent } from "./app.sidebar.component";
import { AppLayoutComponent } from "./app.layout.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollComponent } from '../components/scroll/scroll.component';
import { PositionsComponent } from '../components/positions/positions.component';
import { SignComponent } from '../components/sign/sign.component';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { NgbdCarouselNavigation } from "../components/carousel-navigation/carousel-navigation";

@NgModule({
    declarations: [
        AppMenuitemComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppMenuComponent,
        AppSidebarComponent,
        AppLayoutComponent,

    ],

    imports: [
        CommonModule,
        RouterModule, 
        FormsModule,
        HttpClientModule,
        InputTextModule,
        SidebarModule,
        BadgeModule,
        RadioButtonModule,
        InputSwitchModule,
        RippleModule,
        AppConfigModule,
        ScrollComponent,
        PositionsComponent,
        CheckboxModule,
        SignComponent,
        ButtonModule,
        StyleClassModule,
        NgbdCarouselNavigation,

    ],
    exports: [AppLayoutComponent]
})
export class AppLayoutModule { }


  

