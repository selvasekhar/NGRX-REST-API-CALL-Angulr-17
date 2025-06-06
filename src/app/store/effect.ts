import { inject, Injectable } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import { DepartmentService } from '../service/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loanDepartment, loanDepartmentSuccess } from './action';
import { catchError, map, mergeMap } from 'rxjs';

@Injectable()
export class DepartmentEffects {
  action$ = inject(Actions);
  constructor(private departmentservices: DepartmentService) {}

  loadDepartments$ = createEffect(() =>
    this.action$.pipe(
      ofType(loanDepartment),
      mergeMap(() =>
        this.departmentservices.getDept()
          .pipe(
            map((departments: any) => loanDepartmentSuccess({ departments }))
          )
      )
    )
  );
}