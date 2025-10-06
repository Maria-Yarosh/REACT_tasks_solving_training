
import type { RootState } from "../../app/store";
import type { IUser } from "../../interfaces/users";

export const selectUsersList = (state: RootState): IUser[] | null => {
    return state.users.users
}

export const selectUsersLoading = (state: RootState): boolean => {
    return state.users.isUsersLoading
}

export const selectUsersError = (state: RootState): string | null => {
    return state.users.usersError
}