import List from '@mui/material/List';
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {Todolist} from "@/features/todolists/model/todolists-reducer.ts";
import {selectTasks} from "@/features/todolists/model/tasks-selectors.ts";
import {TaskItem} from "@/features/todolists/ui/Todolists/TodolistItem/Tasks/TaskItem/TaskItem.tsx";
import {Task} from "@/features/todolists/model/tasks-reducer.ts";

type Props = {
    todolist: Todolist
}

export const Tasks = ({ todolist }: Props) => {
    const { id, filter } = todolist;

    const tasks = useAppSelector(selectTasks);

    const todolistTasks = tasks[id];
    let filteredTasks = todolistTasks;

    if (filter === 'active') {
        filteredTasks = todolistTasks.filter((task: Task) => !task.isDone);
    }
    if (filter === 'completed') {
        filteredTasks = todolistTasks.filter((task: Task) => task.isDone);
    }

    return (
        <>
            {filteredTasks.length === 0 ? (
                <p>Тасок нет</p>
            ) : (
                <List>
                    {filteredTasks.map((task: Task) => (
                        <TaskItem key={task.id} task={task} todolistId={id} />
                    ))}
                </List>
            )}
        </>
    );
};