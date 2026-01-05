import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatIconModule} from '@angular/material/icon';
import { MatSnackBarModule} from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TodoFormComponent } from './shared/component/todo-form/todo-form.component';
import { TodoDashboardComponent } from './shared/component/todo-dashboard/todo-dashboard.component';
import { TodoListComponent } from './shared/component/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoDashboardComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSnackBarModule,

    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
