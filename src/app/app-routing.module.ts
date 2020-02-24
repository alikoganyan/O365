import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ExcelComponent} from './excel/excel.component';
import {FolderComponent} from './folder/folder.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'folder', component: FolderComponent, data: {title: 'Folder'}},
  {path: 'excel/:id', component: ExcelComponent, data: {title: 'Excel'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
