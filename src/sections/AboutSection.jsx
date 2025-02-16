import React from "react";
import "./AboutSection.css";
import profilePic from "../profile.jpg"; // Replace with your actual image path

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        {/* Timeline Section */}
        <div className="timeline-container">
          <h2 className="neon-text">Who I Am</h2>
          <p className="about-intro">
            An aspiring software engineer and AI researcher with a strong foundation in automation, backend systems, and data-driven problem-solving. Passionate about building scalable solutions and contributing to open-source projects.
          </p>

          {/* Timeline */}
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>🎓 Started College</h3>
                <p>CS + Math Major at UMD, started September 2023. Expected graduation: May 2026.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>🤖 Microsoft TEALS Program TA</h3>
                <p> Helped teach APCSA (July 2024 - Present).</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>🔓 Open-Source Contributor</h3>
                <p>Contributing to open-source projects since April 2024.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>👨‍🏫 Coding Instructor</h3>
                <p>Teaching coding at Computer CORE since September 2022.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>🛡️ Winter Defense Tech Fellowship</h3>
                <p>Internship at Palantir Technologies (Dec 2024 - Jan 2025).</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>🚀 Software Engineer</h3>
                <p>Part-time SDE at a stealth AI startup (June 2024 - Aug 2024).</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>📊 Research Intern</h3>
                <p>Worked at Rebellion Research (Sept 2023 - Nov 2023).</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>💻 Software Engineer Intern</h3>
                <p>Interned at iQuasar LLC (June 2023 - Aug 2023).</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>🛠️ QA Intern</h3>
                <p>Software QA Intern at Skill Struck (May 2023 - June 2023).</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>🤖 ML Intern</h3>
                <p>Worked at Kashmir World Foundation (Dec 2022 - June 2023).</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>🔐 Cybersecurity Intern</h3>
                <p>Interned at TAC (June 2022 - July 2022).</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enlarged Profile Picture */}
        <div className="profile-container">
          <div className="holo-frame">
            <img src={profilePic} alt="Profile" className="profile-pic" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
