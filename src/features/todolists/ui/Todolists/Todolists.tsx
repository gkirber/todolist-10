import {Paper} from '@mui/material'
import {useAppSelector} from '../../../../common/hooks/useAppSelector.ts'
import {selectTodolists} from '@/features/todolists/model/todolists-selectors.ts'
import {TodolistItem} from './TodolistItem/TodolistItem.tsx'

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