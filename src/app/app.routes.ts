import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule, Routes, provideRouter, withHashLocation } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicationConfig } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PortfolioComponent } from './portofolio/portofolio.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HeroComponent, title: 'Home' },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'portfolio', component: PortfolioComponent, title: 'Portfolio' },
  { path: 'navbar', component: NavbarComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: '**', component: NotfoundComponent, title: 'Not Found' }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
})
export class AppModule {}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withHashLocation()),
    provideClientHydration()
  ]
};