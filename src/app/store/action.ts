import { createAction, props } from '@ngrx/store';
import { Department } from './model';

export const loanDepartment = createAction('[loanDepartment], Loan Department');
export const loanDepartmentSuccess = createAction(
  '[loanDepartmentSuccess], Loan Department Success',
  props<{ departments: Department[] }>()
);
