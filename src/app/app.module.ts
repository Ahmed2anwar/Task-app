import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { provideHttpClient } from '@angular/common/http';
import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskItemComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
