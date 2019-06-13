import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './site/home/home.component';
import { BlogComponent } from './site/blog/blog.component';
import { ProjectsComponent } from './site/projects/projects.component';
import { SoftwareDesignComponent } from './site/projects/software-design/software-design.component';
import { NaturalUserInterfaceComponent } from './site/projects/natural-user-interface/natural-user-interface.component';
import { SqlServerTipsComponent } from './site/blog/sql-server-tips/sql-server-tips.component';
import { AngularTipsComponent } from './site/blog/angular-tips/angular-tips.component';

const routes: Routes = [
  {
    path: 'blog',
    children: [
      {
        path: 'sql-server-tips',
        component: SqlServerTipsComponent
      },
      {
        path: 'angular-tips',
        component: AngularTipsComponent
      },
      {
        path: '',
        component: BlogComponent
      },
    ]
  },
  {
    path: 'projects',
    children: [
      {
        path: 'software-design',
        component: SoftwareDesignComponent
      },
      {
        path: 'natural-user-interface',
        component: NaturalUserInterfaceComponent
      },
      {
        path: '',
        component: ProjectsComponent
      },
    ],
  },
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
