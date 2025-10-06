import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks/hooks"
import { selectRolesError, selectRolesList, selectRolesLoading } from "../features/roles/selectors"
import { fetchRoles } from "../features/roles/rolesSlice"

export const RolesList = () => {

    const dispatch = useAppDispatch()
    const roles = useAppSelector(selectRolesList)
    const isRolesLoading = useAppSelector(selectRolesLoading)
    const rolesError = useAppSelector(selectRolesError)

    useEffect(() => {
            dispatch(fetchRoles())
        }, [dispatch])

        if(isRolesLoading) {
        return (
            <div>Загрузка...</div>
        )
    }

    if(rolesError) {
        return (
            <div>{rolesError}</div>
        )
    }

    return (
        <>
            {roles?.map((role) => {
                return (
                    <>
                    <div>{role.roleName}</div>
                    {role.companyInfo?.map((company) => {
                        return (
                            <div>{company.name}</div>
                        )
                    })}
                    </>
                )
            })}
        </>
    )
}