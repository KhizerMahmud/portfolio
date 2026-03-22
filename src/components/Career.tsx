import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5 className="career-company-one-line">
                  Bestgate Engineering (AWS Contractor)
                </h5>
              </div>
              <h3>Present</h3>
            </div>
            <div className="career-details">
              <p className="career-detail">
                Arlington, VA · Jan 2026 – Present. Architecting and implementing
                a serverless document management platform in Rust for AWS Mission
                Networking using Lambda, API Gateway, DynamoDB, and S3.
              </p>
              <p className="career-detail">
                Designed a scalable single-table DynamoDB model with GSIs for
                packages, documents, and approval workflows. Built automated
                approval flows integrated with internal orchestration and
                end-to-end Rust tests for ingestion, workflows, and APIs.
              </p>
            </div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Capital One</h5>
              </div>
              <h3>2023</h3>
            </div>
            <div className="career-details">
              <p className="career-detail">
                McLean, VA · Aug 2023 – Jan 2026. Backend microservices in Java
                and Python with RESTful APIs and distributed workflows aligned to
                compliance and cloud standards.
              </p>
              <p className="career-detail">
                Platform engineering on Hibernator (AWS, Terraform, Step
                Functions, SQS, Lambda), including $2M+ annual cloud-cost
                avoidance; event-driven telemetry and React dashboards that
                improved AWS resource optimization by about 60%.
              </p>
              <p className="career-detail">
                Separate track: React and TypeScript UIs for fraud operations
                when customers call about card fraud, with heavy use of the AWS
                Console and AWS-backed workflows for investigations and agent
                tooling.
              </p>
            </div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>TetraCore</h5>
              </div>
              <h3>2022</h3>
            </div>
            <div className="career-details">
              <p className="career-detail">
                Rockville, MD · Nov 2022 – Jul 2023. Python batch pipelines and
                microservices that cut processing time by 36% via optimized data
                flows, containers, and parallel execution.
              </p>
              <p className="career-detail">
                Java and Python backends with PostgreSQL and MongoDB for
                classification and analysis. React and JavaScript UI work for
                real-time reporting dashboards on internal REST APIs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
