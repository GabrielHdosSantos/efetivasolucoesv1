import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreensRoutingModule } from './screens-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';


import { SidebarModule } from "primeng/sidebar";
import { ButtonModule } from 'primeng/button';
import {ListboxModule} from 'primeng/listbox';
import { NavComponent } from './nav/nav.component';
import {GalleriaModule} from 'primeng/galleria';
import {ImageModule} from 'primeng/image';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    NavComponent,
    HomeComponent,
    ContactComponent,
    NotFoundComponent,
    TecnologiasComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ScreensRoutingModule,
    SidebarModule,
    ButtonModule,
    ListboxModule,
    GalleriaModule,
    ImageModule,
  ]
})
export class ScreensModule { }
