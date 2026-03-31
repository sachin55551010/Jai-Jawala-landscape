import { Link } from "react-router-dom";
import project from "../assets/project.jpg";
import { HeadingAnimateText } from "../components/ui/HeadingAnimateText";
import { FaqPage } from "../components/FaqPage";
export const ProjectSection = () => {
  const heading: string = "PROJECTS";
  return (
    <div className="overflow-hidden">
      {/* heading section */}
      <section
        className="h-100 w-dvw bg-cover bg-center bg-no-repeat p-2 flex flex-col items-start justify-end"
        style={{ backgroundImage: `url(${project})` }}
      >
        <Link to="/" className="text-(--base-color) mb-2 text-lg opacity-60">
          HOME
        </Link>
        <div className="text-gray-200 flex">
          {heading.split("").map((text, index) => {
            return (
              <HeadingAnimateText
                key={text + index}
                delay={index * 0.1}
                className="text-(--base-color) mb-8 font-semibold text-5xl tracking-widest lg:text-6xl flex"
              >
                {text === " " ? "\u00A0" : text}
              </HeadingAnimateText>
            );
          })}
        </div>
      </section>

      <FaqPage />
    </div>
  );
};
