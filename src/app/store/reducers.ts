import { createReducer, on } from "@ngrx/store";
import { Department } from "./model";
import { loanDepartment, loanDepartmentSuccess } from "./action";

export interface DepartmentState {
    departments : Department[],
    loading:boolean;
}
export const InitialState : DepartmentState ={
    departments:[],
    loading:false
}


export const Departmentreducer = createReducer(
    InitialState,on(loanDepartment,(state)=> ({
        ...state, 
        loading:true
    })),
    on(loanDepartmentSuccess,(state, {departments})=> ({
        ...state, 
        departments,
        // loading:false
    }))
)
