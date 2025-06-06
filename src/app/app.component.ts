import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { loanDepartment } from './store/action';
import { Department } from './store/model';
import { Observable } from 'rxjs';
import { selectDepartments, selectDepartmentState } from './store/selector';
import { AsyncPipe } from '@angular/common';
import { AdminComponent } from "./components/admin/admin.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, RouterOutlet, AdminComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'angular17';
  department$:Observable<any> = new Observable<any>;
  loading$:Observable<number> = new Observable<number>;

  constructor(private store:Store<Department>){
    this.department$ = this.store.select(selectDepartments)
 }

  ngOnInit(): void {
      this.store.dispatch(loanDepartment())
  }
}
