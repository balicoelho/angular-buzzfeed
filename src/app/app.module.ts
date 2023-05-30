import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [AppComponent, QuizzesComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
