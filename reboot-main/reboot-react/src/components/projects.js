import React from "react";
import data from "../data/projects.json";
import SectionTitle from "./section-title";
import { useNavigate } from "react-router-dom";
import { Trans } from "react-i18next";

const Projects = ({ isBg }) => {
  const navigate = useNavigate();
  const { projects } = data;
  const { title, subtitle, project } = projects;

  const handleProjectClick = (index) => {
    navigate("/projects", { state: { scrollToRow: index } });
  };

  return (
    // <!-- ========== Projects section start ========== -->
    <section
      className={`portfoliov2 section-padding ${isBg === "yes" ? "bg-one" : "" }`}
      id="projects"
    >
      <div className="container">
        <SectionTitle
          title={<Trans i18nKey="projects.title">{title}</Trans>}
          subtitle={<Trans i18nKey="projects.subtitle">{subtitle}</Trans>}
          direction="center"
        />

        <div className="row">
          {project.map((projectData, i) => (
            <div key={i} className="col-lg-4 col-md-6 col-sm-6">
              <div 
                className="portfoliov2__single translateEffect1"
                onClick={() => handleProjectClick(i)}
                style={{ cursor: "pointer" }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleProjectClick(i);
                  }
                }}
              >
                <div className="portfoliov2__single--image">
                  <img
                    className="img-fluid"
                    src={projectData.image}
                    alt="Portfolio 1"
                  />
                </div>
                <div className="portfoliov2__single--content">
                  <h3>
                    <Trans i18nKey={`projects.project${i + 1}.title`}>
                      {projectData.title}
                    </Trans>
                  </h3>
                  <span>
                    <Trans i18nKey={`projects.project${i + 1}.tag`}>
                      {projectData.tag}
                    </Trans>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    // <!-- ========== Projects section end ========== -->
  );
};

export default Projects;
