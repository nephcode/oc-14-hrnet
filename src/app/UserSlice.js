import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: '',
    employeeList: [] // Liste des employés
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setEmployeeField: (state, action) => {
            const { field, value } = action.payload;
            state[field] = value;
        },
        clearEmployee: (state) => {
            return {
                ...initialState,
                employeeList: state.employeeList
            };
        },
        addEmployee: (state, action) => {
            state.employeeList.push(action.payload);
        },
        setEmployeeList: (state, action) => {
            state.employeeList = action.payload;
        },

    }
});

export const {
    setEmployeeField,
    clearEmployee,
    addEmployee,
    setEmployeeList,
} = userSlice.actions;

export default userSlice.reducer;