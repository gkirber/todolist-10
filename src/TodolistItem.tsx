import {useAppDispatch} from "./common/hooks/useAppDispatch"
import {createTaskAC} from "@/model/tasks-reducer.ts";
import {Todolist} from "@/model/todolists-reducer.ts";
import {CreateItemForm} from "@/CreateItemForm.tsx";
import {TodolistTitle} from "@/TodolistTitle.tsx";
import {FilterButtons} from "@/FilterButtons.tsx";
import {Tasks} from "@/Tasks.tsx";


type Props = {
    todolist: Todolist
}

export const TodolistItem = ({todolist}: Props) => {
    const dispatch = useAppDispatch()

    const createTask = (title: string) => {
        dispatch(createTaskAC({todolistId: todolist.id, title}))
    }

    return (
        <div>
            <TodolistTitle todolist={todolist}/>
            <CreateItemForm onCreateItem={createTask}/>
            <Tasks todolist={todolist}/>
            <FilterButtons todolist={todolist}/>
        </div>
    )
}