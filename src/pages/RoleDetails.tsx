import { useEffect } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../app/hooks/hooks"
import { fetchRoleById } from "../features/roles/rolesSlice"
import { selectRole, selectRoleError, selectRoleLoading } from "../features/roles/selectors"
import { RolesList } from "../components/RolesList"

export const RoleDetails = () => {

    const { roleId } = useParams()
    const dispatch = useAppDispatch()
    const role = useAppSelector(selectRole)
    const loading = useAppSelector(selectRoleLoading)
    const error = useAppSelector(selectRoleError)

    const location = useLocation()
    const navigate = useNavigate()
    const queryParams = new URLSearchParams(location.search)
    const from = queryParams.get('from')
    const companyId = queryParams.get('companyId')


    useEffect(() => {
        if(roleId) dispatch(fetchRoleById(roleId))
    }, [roleId, dispatch])

    console.log(companyId)

    const handleBack = () => {
        if(from === 'company_details') {
            navigate(`/company_details/${companyId}`)
        } else if (from === 'home') {
            navigate('/')
        }
    }

    

    const renderRoleDetailsInfo = () => {
        if(loading) {
        return (
            <div>Загрузка...</div>
        )
    }

    if(error) {
        return (
            <div>{error}</div>
        )
    }

    return (
        <p>{role?.roleName}</p>
    )
    }

    return (
        <>
            <button onClick={handleBack}>Назад</button>

           {renderRoleDetailsInfo()}

            <RolesList />
        </>
    )
}