import { configureStore } from "@reduxjs/toolkit";
import companiesReducer from '../features/companies/companiesSlice'
import rolesReducer from '../features/roles/rolesSlice'
import usersReducer from '../features/users/usersSlice'

export const store = configureStore({
  reducer: {
    companies: companiesReducer,
    roles: rolesReducer,
    users: usersReducer
  },

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


