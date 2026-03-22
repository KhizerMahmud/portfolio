import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para para-lead">
          Software engineer focused on cloud platforms, backend services, and
          polished UIs. I ship systems that stay observable, keep cost in mind,
          and are ready for production.
        </p>
        <ul className="about-highlights">
          <li>
            <strong>Bestgate (AWS contractor):</strong> Rust serverless platform
            on Lambda, API Gateway, DynamoDB, and S3 for Mission Networking.
          </li>
          <li>
            <strong>Capital One:</strong> Java and Python microservices;
            Hibernator (Terraform, Step Functions, SQS, Lambda) for cloud cost
            automation and telemetry. React and TypeScript for fraud operations
            when customers call about card fraud, plus AWS Console workflows for
            investigations.
          </li>
          <li>
            <strong>TetraCore:</strong> Python and Java pipelines and data
            stores; reporting UIs on internal APIs.
          </li>
        </ul>

        <div className="about-credentials" aria-label="Education and certifications">
          <div className="about-credentials-block">
            <h4 className="about-credentials-heading">Education</h4>
            <dl className="about-credentials-dl">
              <div className="about-credentials-row">
                <dt>MS, Computer Science</dt>
                <dd>Johns Hopkins University</dd>
              </div>
              <div className="about-credentials-row">
                <dt>BS, Biology, minor in Chemistry</dt>
                <dd>Virginia Commonwealth University</dd>
              </div>
              <div className="about-credentials-row">
                <dt>AS, Biology, minor in Chemistry</dt>
                <dd>Northern Virginia Community College</dd>
              </div>
            </dl>
          </div>

          <div className="about-credentials-block">
            <h4 className="about-credentials-heading">Certifications</h4>
            <ul className="about-credentials-certs">
              <li>AWS Solutions Architect</li>
              <li>AWS Artificial Intelligence Practitioner</li>
              <li>Certified Secure Software Engineer (CSSE)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
