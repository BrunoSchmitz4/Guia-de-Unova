import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StriatonPageRoutingModule } from './striaton-routing.module';

import { StriatonPage } from './striaton.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StriatonPageRoutingModule
  ],
  declarations: [StriatonPage]
})
export class StriatonPageModule {}
