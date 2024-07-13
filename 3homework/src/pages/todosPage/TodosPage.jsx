import css from './todosPage.module.css'
import {Todo} from "../../components/todo/Todo";

const arr = ["todo 1", "todo 2", "todo 3"]

export function TodosPage () {

    return (
        <>
            <h2 className={css.todos}>Todos Page</h2>
            {
                arr.map((element, index) => <Todo  key={index} name={element}/>)
            }
        </>
    )

}