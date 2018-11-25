import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BodyComponent } from './components/body/body.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
  ],
  declarations: [
    HeaderComponent,
    BodyComponent,
  ],
  exports: [
    HeaderComponent,
    BodyComponent,
  ]
})
export class SharedModule { }
