import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks/hooks"
import { selectCompany, selectCompanyError, selectCompanyLoading } from "../features/companies/selectors"
import { fetchCompanyById } from "../features/companies/companiesSlice"
import { useLocation, useNavigate, useParams } from "react-router-dom"

export const CompanyDetails = () => {

    const company = useAppSelector(selectCompany)
    const isCompanyLoading = useAppSelector(selectCompanyLoading)
    const companyError = useAppSelector(selectCompanyError)
    const dispatch = useAppDispatch()

    const location = useLocation()
    const navigate = useNavigate()

    const { id } = useParams()

    const queryParams = new URLSearchParams(location.search)
    const from = queryParams.get('from')

    useEffect(() => {
        if(id) dispatch(fetchCompanyById(id))
    }, [id, dispatch])

    console.log('CompanyDetails render', company)

    const handleBack = () => {
        if(from === 'home') {
            navigate('/')
        } 
    }

    if(isCompanyLoading) {
        return (
            <div>Загрузка...</div>
        )
    }

    if(companyError) {
        return (
            <div>{companyError}</div>
        )
    }

  return (
    <>
    {/* {from === 'home' && (
        <button onClick={() => navigate('/')}>Назад</button>
    )} */}
    <button onClick={handleBack}>Назад</button>
    <div>{company?.name}</div>
    <div onClick={() => navigate(`/role_details/${company?.roles.id}?from=company_details&companyId=${company?.id}`)}>{company?.roles.roleName}</div>
    </>
  )
}