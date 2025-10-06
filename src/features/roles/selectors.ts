
import type { RootState } from "../../app/store"
import type { IRole } from "../../interfaces/roles"

export const selectRole = (state: RootState): IRole | null => {
    return state.roles.role
}

export const selectRoleLoading = (state: RootState): boolean => {
    return state.roles.isRoleLoading
}

export const selectRoleError = (state: RootState): string | null=> {
    return state.roles.roleError
}


export const selectRolesList = (state: RootState): IRole[] | null => {
    return state.roles.roles
}

export const selectRolesLoading = (state: RootState): boolean => {
    return state.roles.isRolesLoading
}

export const selectRolesError = (state: RootState): string | null => {
    return state.roles.error
}