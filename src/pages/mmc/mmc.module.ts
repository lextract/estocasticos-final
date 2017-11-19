import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MmcPage } from './mmc';

@NgModule({
  declarations: [
    MmcPage,
  ],
  imports: [
    IonicPageModule.forChild(MmcPage),
  ],
})
export class MmcPageModule {}
