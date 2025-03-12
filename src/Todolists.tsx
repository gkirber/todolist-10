import {Paper} from '@mui/material'
import {useAppSelector} from './common/hooks/useAppSelector'
import {selectTodolists} from './model/todolists-selectors'
import {TodolistItem} from './TodolistItem'

export const Todolists = () => {
    const todolists = useAppSelector(selectTodolists)

    return (
        <>
            {todolists.map((todolist) => (
                <Paper key={todolist.id} sx={{p: '0 20px 20px 20px'}}>
                    <TodolistItem todolist={todolist}/>
                </Paper>
            ))}
        </>
    )
}