import {Description} from "../../components/description/Description";
import {AboutPage} from "../aboutPage/AboutPage";
import {TodosPage} from "../todosPage/TodosPage";
import css from "./mainPage.module.css"


export function MainPage () {
    return (
        <>
            <Description title={'title'} description={'description'}/>
            <h2 className={css.border}>=======</h2>
            <AboutPage/>
            <h2 className={css.border}>=======</h2>
            <TodosPage/>
        </>
    );
}
