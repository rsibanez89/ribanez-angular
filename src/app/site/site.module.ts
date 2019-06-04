import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SoftwareDesignComponent } from './projects/software-design/software-design.component';
import { RouterModule } from '@angular/router';
import { NaturalUserInterfaceComponent } from './projects/natural-user-interface/natural-user-interface.component';
import { SqlServerComponent } from './blog/sql-server/sql-server.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgZorroAntdModule
  ],
  declarations: [
    HomeComponent,
    ProjectsComponent,
    BlogComponent,
    SoftwareDesignComponent,
    NaturalUserInterfaceComponent,
    SqlServerComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class SiteModule { }
