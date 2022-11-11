import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextToSpechComponent } from './text-to-spech/text-to-spech.component';
import { WeatherComponent } from './weather/weather.component';
import { YoutubeDownloadComponent } from './youtube-download/youtube-download.component';


const routes: Routes = [
  {path:"",pathMatch:"full",component:TextToSpechComponent},
  {path:"weather",component:WeatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
