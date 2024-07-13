import css from './todo.module.css'

export function Todo({name}) {
    return (
        <div className={css.name}>
            {name}
        </div>
    );
}

