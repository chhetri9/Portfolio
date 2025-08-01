import Projectdemo from "./Projectdemo";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <Projectdemo
          title="TODO APP"
          main="An app to manage your tasks efficiently with incomplete and completed tasks segregated."
        />
      </div>
    </div>
  );
};

export default Projects;