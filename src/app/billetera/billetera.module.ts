import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BilleteraPageRoutingModule } from './billetera-routing.module';

import { BilleteraPage } from './billetera.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    BilleteraPageRoutingModule
  ],
  declarations: [BilleteraPage]
})
export class BilleteraPageModule {}
