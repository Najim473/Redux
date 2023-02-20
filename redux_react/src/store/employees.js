// EXERCISE CODE
import { createSlice } from "@reduxjs/toolkit";
let id = 0;
const employeeSlice = createSlice({
    name: "Employees",
    initialState: [],
    reducers: {
        addEmployee: (state, action) => {
            state.push({
                id: ++id,
                employee: action.payload.employee,
            });
        },
    },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
