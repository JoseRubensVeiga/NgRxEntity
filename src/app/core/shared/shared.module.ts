import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header';
import { SidenavComponent } from './components/sidenav';
import { FooterComponent } from './components/footer';

@NgModule({
  declarations: [HeaderComponent, SidenavComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, SidenavComponent, FooterComponent],
})
export class SharedModule {}
