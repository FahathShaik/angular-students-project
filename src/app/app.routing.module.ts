import { StudentformComponent } from './studentform/studentform.component';
import { StudentComponent } from './student/student.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormComponentComponent } from './form-component/form-component.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: FormComponentComponent },
      { path: 'route-one', component: StudentComponent },
      { path: 'route-two', component: StudentformComponent},
      { path: '**', redirectTo: 'home' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}
