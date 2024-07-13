import css from './description.module.css'

export function Description({title, description}) {
    return (
        <>
            <h2 className={css.title}>{title}</h2>
            <p className={css.description}>{description}</p>
        </>
    );
}