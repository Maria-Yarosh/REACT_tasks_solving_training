import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks/hooks"
import { selectUsersError, selectUsersList, selectUsersLoading } from "../features/users/selectors"
import { fetchUsers } from "../features/users/usersSlice"

export const UsersList = () => {

    const dispatch = useAppDispatch()
    const users = useAppSelector(selectUsersList)
    const isUsersLoadind = useAppSelector(selectUsersLoading)
    const usersError = useAppSelector(selectUsersError)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    if(isUsersLoadind) {
        return (
            <div>Загрузка...</div>
        )
    }

    if(usersError) {
        return (
            <div>{usersError}</div>
        )
    }

    return (
        <>
        {users?.map((user) => {
            return (
                <div>
                    <p>Имя:{user.name}</p>
                    <p>Возраст:{user.age}</p>
                    <p>Город:{user.city}</p>
                    {user.hobbies.map((interst) => {
                        return (<div>Увлечения:{interst}</div>)
                    })}
                </div>
            )
        })}
        </>
    )
}