import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BodyComponent } from './components/body/body.component';
import { GistFrameComponent } from './components/gist-frame/gist-frame.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
  ],
  declarations: [
    HeaderComponent,
    BodyComponent,
    GistFrameComponent,
  ],
  exports: [
    HeaderComponent,
    BodyComponent,
    GistFrameComponent,
  ]
})
export class SharedModule { }
