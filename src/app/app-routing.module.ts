import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'undergo',
    children: [
		{
			path: '',
			loadChildren: () => import('./undergo-home/undergo-home.module').then( m => m.UndergoHomePageModule)
		},
		{
			path: 'about',
			loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
		},
		{
			path: 'experience',
			loadChildren: () => import('./experience/experience.module').then( m => m.ExperiencePageModule)
		},
		{
			path: 'faq',
			loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
		},
	]
  },
  {
    path: '',
    redirectTo: 'undergo',
    pathMatch: 'full'
  },
  {
    path: 'coming-soon',
    loadChildren: () => import('./coming-soon/coming-soon.module').then( m => m.ComingSoonPageModule)
  },  {
    path: 'session',
    loadChildren: () => import('./session/session.module').then( m => m.SessionPageModule)
  },
  {
    path: 'under-construction',
    loadChildren: () => import('./under-construction/under-construction.module').then( m => m.UnderConstructionPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
