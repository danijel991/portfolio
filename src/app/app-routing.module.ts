import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IamComponent } from './iam/iam.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'iam', component: IamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
