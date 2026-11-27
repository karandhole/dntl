
import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, BriefcaseBusiness, Users, Building2 } from "lucide-react";
import "./CareersMain.css";

const openings = [
  {
    id: "01",
    department: "Engineering",
    title: "Electrical Executive / Sr. Executive",
    type: "Full Time",
    location: "DNTL",
    path: "#",
    icon: "engineering",
  },
  {
    id: "02",
    department: "Production",
    title: "Production Executive / Sr. Executive",
    type: "Full Time",
    location: "DNTL",
    path: "#",
    icon: "production",
  },
];

const CareersMain = () => {
  return (
    <main className="careers-page">

      {/* Hero Section */}
     
      {/* Introduction */}
      <section className="careers-intro">
        <div>
          <span className="career-eyebrow">CAREERS AT DNTL</span>
          <h2>Where Talent Meets Opportunity</h2>
        </div>

        <p>
          At DNTL, we value people who are passionate about learning,
          taking responsibility and growing together. Explore our
          current openings and discover an opportunity to be part
          of our journey.
        </p>
      </section>

      {/* Why DNTL */}
      <section className="career-highlights">
        <div className="career-highlight">
          <div className="career-highlight-icon">
            <Users size={23} />
          </div>
          <div>
            <h3>People First</h3>
            <p>A collaborative and supportive work environment.</p>
          </div>
        </div>

        <div className="career-highlight">
          <div className="career-highlight-icon">
            <BriefcaseBusiness size={23} />
          </div>
          <div>
            <h3>Career Growth</h3>
            <p>Opportunities to develop skills and grow professionally.</p>
          </div>
        </div>

        <div className="career-highlight">
          <div className="career-highlight-icon">
            <Building2 size={23} />
          </div>
          <div>
            <h3>Meaningful Work</h3>
            <p>Contribute to innovation in specialty chemicals.</p>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="career-openings" id="current-openings">
        <div className="career-section-heading">
          <div>
            
            <h2>Career Opportunities</h2>
            <p>Explore our current openings and find your next opportunity.</p>
          </div>

          <span className="career-opening-count">
            {openings.length} OPEN POSITIONS
          </span>
        </div>

        <div className="career-job-list">
          {openings.map((job) => (
            <article className="career-job-card" key={job.id}>
              <div className="career-job-number">{job.id}</div>

              <div className="career-job-details">
                <span className="career-job-department">
                  {job.department}
                </span>
                <h3>{job.title}</h3>

                <div className="career-job-meta">
                  <span>{job.type}</span>
                  <span>{job.location}</span>
                </div>
              </div>

              <Link to={job.path} className="career-more-btn">
                More Details <ArrowUpRight size={18} />
              </Link>
            </article>
          ))}
        </div>
      </section>

     

    </main>
  );
};

export default CareersMain;
