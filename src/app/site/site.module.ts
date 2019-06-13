import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SoftwareDesignComponent } from './projects/software-design/software-design.component';
import { RouterModule } from '@angular/router';
import { NaturalUserInterfaceComponent } from './projects/natural-user-interface/natural-user-interface.component';
import { SharedModule } from '../shared/shared.module';
import { NgxGistModule } from 'ngx-gist/dist/ngx-gist.module';
import { SqlServerTipsComponent } from './blog/sql-server-tips/sql-server-tips.component';
import { AngularTipsComponent } from './blog/angular-tips/angular-tips.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    NgZorroAntdModule,
    NgxGistModule
  ],
  declarations: [
    HomeComponent,
    ProjectsComponent,
    BlogComponent,
    SoftwareDesignComponent,
    NaturalUserInterfaceComponent,
    SqlServerTipsComponent,
    AngularTipsComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class SiteModule { }
