import { FaGithub } from "react-icons/fa6";
import { HiArrowUpRight } from "react-icons/hi2";
import "./styles/Projects.css";
import WorkImage from "./WorkImage";
import {
  APPLYFIRST_URL,
  GITHUB_PROFILE_URL,
  GITHUB_REPOS_URL,
} from "../constants";

type GitHubProject = {
  title: string;
  repo: string;
  description: string;
  stack: string;
};

const githubProjects: GitHubProject[] = [
  {
    title: "Gene Variant Insight",
    repo: "GeneVariantInsight-OOP",
    description:
      "Bioinformatics app for analyzing VCF files with OOP design; visualizes mutation types and gene impact.",
    stack: "React · FastAPI · JavaScript",
  },
  {
    title: "Civilian Insight AI",
    repo: "civilian_insight_ai",
    description:
      "Citizens report civic issues with images, video, or voice; automated classification and triage.",
    stack: "Web & mobile platform",
  },
  {
    title: "ML COVID-19",
    repo: "MLCovid19",
    description:
      "Full-stack machine learning app for COVID-19 death prediction and exploration.",
    stack: "JavaScript · ML",
  },
  {
    title: "ML Stock Bot",
    repo: "ml_stock_bot",
    description:
      "Suggests BUY, SELL, or HOLD for stocks using ML-driven signals.",
    stack: "Python",
  },
  {
    title: "Rock Paper Scissors",
    repo: "rock-paper-scissors",
    description: "Retro-styled Rock Paper Scissors in the browser.",
    stack: "HTML · JavaScript",
  },
  {
    title: "Chemist",
    repo: "Chemist",
    description: "Diffusion-themed puzzle game with a science UI.",
    stack: "HTML · JavaScript",
  },
];

const Projects = () => {
  return (
    <section
      className="projects-section"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <div className="projects-inner section-container">
        <div className="projects-header">
          <h2 id="projects-heading">
            My <span>Projects</span>
          </h2>
          <p className="projects-lead">
            Product work and experiments.{" "}
            <span className="projects-lead-tail">
              More code lives on{" "}
              <a
                href={GITHUB_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>{" "}
              — browse{" "}
              <a
                href={GITHUB_REPOS_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                all repositories
              </a>
              .
            </span>
          </p>
        </div>

        <article className="project-featured" aria-label="ApplyFirst">
          <div className="project-featured-visual">
            <WorkImage
              image="/images/applyfirst-hero.png"
              alt="ApplyFirst — SaaS job search product"
              link={APPLYFIRST_URL}
              variant="screenshot"
            />
          </div>
          <div className="project-featured-copy">
            <p className="project-featured-eyebrow">SaaS · AI job search</p>
            <h3 className="project-featured-title">ApplyFirst</h3>
            <p className="project-featured-desc">
              Platform for job seekers: AI cold emails, hiring contact lookup,
              pay-as-you-go credits. Built with React, TypeScript, and Vercel.
            </p>
            <a
              className="project-featured-cta"
              href={APPLYFIRST_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
            >
              Visit ApplyFirst
              <HiArrowUpRight aria-hidden />
            </a>
          </div>
        </article>

        <h3 className="projects-subheading">Open source & more</h3>

        <ul className="projects-grid">
          {githubProjects.map((p) => {
            const href = `${GITHUB_PROFILE_URL}/${p.repo}`;
            return (
              <li key={p.repo}>
                <a
                  className="project-card"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="disable"
                >
                  <span className="project-card-top">
                    <span className="project-card-icon" aria-hidden>
                      <FaGithub />
                    </span>
                    <HiArrowUpRight
                      className="project-card-arrow"
                      aria-hidden
                    />
                  </span>
                  <h3 className="project-card-title">{p.title}</h3>
                  <p className="project-card-desc">{p.description}</p>
                  <span className="project-card-stack">{p.stack}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
