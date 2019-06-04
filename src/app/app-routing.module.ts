import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './site/home/home.component';
import { BlogComponent } from './site/blog/blog.component';
import { ProjectsComponent } from './site/projects/projects.component';
import { SoftwareDesignComponent } from './site/projects/software-design/software-design.component';
import { NaturalUserInterfaceComponent } from './site/projects/natural-user-interface/natural-user-interface.component';
import { SqlServerComponent } from './site/blog/sql-server/sql-server.component';

const routes: Routes = [
  {
    path: 'blog',
    children: [
      {
        path: 'sql-server',
        component: SqlServerComponent
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
