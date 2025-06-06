import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectDepartments } from '../../store/selector';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  private store = inject(Store);

  department$ = this.store.select(selectDepartments)
}