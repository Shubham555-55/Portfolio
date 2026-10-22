import ProjectCard from "./ProjectCard";
import "./Projects.css"

function Projects({projects}){
    return (
        <section className="section projects" id="projects" >
            <div className="container">
                <h2 className="section-title">My Projects</h2>
                <p className="section-subtitle" >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus dolores praesentium voluptatibus natus quasi harum earum recusandae fuga, ratione commodi!

                </p>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <ProjectCard key={project._id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Projects