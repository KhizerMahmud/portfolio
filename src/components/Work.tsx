import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { APPLYFIRST_URL } from "../constants";

type WorkProject = {
  title: string;
  category: string;
  tools: string;
  image: string;
  link?: string;
  imageVariant?: "default" | "screenshot";
};

const projects: WorkProject[] = [
  {
    title: "MNet",
    category: "Mission Networking · Bestgate Engineering · AWS",
    tools:
      "MNet document platform: Rust, AWS Lambda, API Gateway, DynamoDB (single-table + GSIs), S3, serverless workflows, integration tests",
    image: "/images/work-mission-networking.png?v=8",
    imageVariant: "screenshot",
  },
  {
    title: "Hibernator & cloud savings",
    category: "Capital One · Platform engineering",
    tools:
      "AWS, Terraform, Step Functions, SQS, Lambda, tagging & automation — $2M+ annual cost avoidance",
    image: "/images/work-hibernator.png?v=1",
    imageVariant: "screenshot",
  },
  {
    title: "Fraud resolution UI",
    category: "Capital One · Fraud operations",
    tools:
      "React and TypeScript interfaces for agents resolving card fraud when customers call in; AWS Console and AWS-backed services for investigations, logs, and telemetry",
    image: "/images/work-capital-one-fraud.png?v=c1-theme",
    imageVariant: "screenshot",
  },
  {
    title: "ApplyFirst",
    category: "SaaS · AI job search",
    tools:
      "SaaS platform for job seekers: AI cold emails, hiring contact lookup, pay as you go credits; React, TypeScript, Vercel",
    image: "/images/applyfirst-hero.png",
    link: APPLYFIRST_URL,
    imageVariant: "screenshot",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                        variant={project.imageVariant}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
