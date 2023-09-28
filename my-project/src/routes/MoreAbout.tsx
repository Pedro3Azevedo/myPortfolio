import {useParams} from "react-router";
import MoreAboutProject from "../components/MoreAboutProject.tsx";


function MoreAbout() {
    const {name} = useParams<{ name: string | undefined }>(); // Ensure category is of type string

    return (
        <>
            <section id="projects" className={"container"}>
                <h1 className="title">Projects</h1>
                <MoreAboutProject name={name}/>
            </section>
        </>
    );
}

export default MoreAbout;