import { useEffect } from 'react'
import './App.css'
import { useAppDispatch, useAppSelector } from './app/hooks/hooks'
import { fetchCompanies } from './features/companies/companiesSlice'
import { selectCompaniesList, selectCompaniesError, selectCompaniesLoading } from './features/companies/selectors'
import { useNavigate } from 'react-router-dom'
import { Counter } from './counter'
import { UserProfile } from './UserProfile'
import { TodoList } from './TodoList'

function App() {

  const dispatch = useAppDispatch()

  const companies = useAppSelector(selectCompaniesList)
  const isCompaniesLoading = useAppSelector(selectCompaniesLoading)
  const error = useAppSelector(selectCompaniesError)

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchCompanies())
  }, [dispatch])

  console.log('App render', companies)


  if(isCompaniesLoading) {
    return (
      <div>Загрузка...</div>
    )
  }

  if(error || !companies) {
    return (
      <div>{error}</div>
    )
  } 

  return (
    <>
    {companies.map((company) => {
      return (
        <div className='company_role'>
          <p onClick={() => navigate(`/company_details/${company.id}?from=home`)}>{company.name}</p>
          <p onClick={() => navigate(`/role_details/${company?.roles.id}?from=home`)}>{company.roles.roleName}</p>
        </div>
      )
    })}
    <button onClick={() => navigate('/user_list')}>Показать список пользователей</button>
    <Counter />
    <UserProfile />
    <TodoList />
    </>
  )
}

export default App
