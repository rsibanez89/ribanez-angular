import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './site/home/home.component';
import { BlogComponent } from './site/blog/blog.component';
import { ProjectsComponent } from './site/projects/projects.component';
import { SoftwareDesignComponent } from './site/projects/software-design/software-design.component';

const routes: Routes = [
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'projects',
    children: [
      {
        path: 'softwaredesign',
        component: SoftwareDesignComponent
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
