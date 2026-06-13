import logo from "./assets/logo.png";
import hero from "./assets/hero.png";
import feature1 from "./assets/feature1.png";
import feature2 from "./assets/feature2.png";
import feature3 from "./assets/feature3.png";
import gallery1 from "./assets/gallery1.png";
import gallery2 from "./assets/gallery2.png";
import gallery3 from "./assets/gallery3.png";
import "./App.css";

function App() {
  return (
    <div>
      <nav className="navbar">
        <a href="#home" className="nav-logo">
          <img src={logo} alt="Data Diet Logo" />
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
        </div>

        <a
          href="https://datadiet.app/"
          target="_blank"
          rel="noreferrer"
          className="nav-btn"
        >
          Visit Website
        </a>
      </nav>

      <header id="home" className="hero-section">
        <div className="hero-bg one"></div>
        <div className="hero-bg two"></div>

        <div className="hero-content">
          <span className="highlight">AI-Powered Nutrition Platform</span>

          <h1>Personalized nutrition plans made smarter.</h1>

          <p>
            Data Diet helps users generate AI-based diet plans, track nutrition
            progress, and connect with certified health professionals.
          </p>

          <div className="hero-buttons">
            <a
              href="https://datadiet.app/"
              target="_blank"
              rel="noreferrer"
              className="primary-btn"
            >
              Visit Website
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={hero} alt="Data Diet Dashboard" />
        </div>
      </header>

      <section id="features" className="features-section">
        <h2>Key Features</h2>

        <div className="feature-row">
          <div className="feature-text">
            <h3>Health Assessment</h3>
            <p>
              Calculate BMI, daily calories, hydration goals, and health metrics
              to create a smarter foundation for personalized nutrition plans.
            </p>
          </div>

          <div className="feature-img">
            <img src={feature1} alt="Health Assessment" />
          </div>
        </div>

        <div className="feature-row reverse">
          <div className="feature-text">
            <h3>AI-Powered Nutrition Planning</h3>
            <p>
              Generate customized nutrition plans based on user goals, body
              metrics, activity level, and dietary preferences.
            </p>
          </div>

          <div className="feature-img">
            <img src={feature2} alt="AI Nutrition Planning" />
          </div>
        </div>

        <div className="feature-row">
          <div className="feature-text">
            <h3>Plan History Dashboard</h3>
            <p>
              Review saved nutrition plans, compare previous progress, and keep
              all generated plans organized in one clean dashboard.
            </p>
          </div>

          <div className="feature-img">
            <img src={feature3} alt="Plan History Dashboard" />
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <h2>Application Preview</h2>

        <p className="gallery-subtitle">
          A quick look at additional tools inside Data Diet that support healthy
          eating, grocery planning, and professional guidance.
        </p>

        <div className="gallery-grid">
          <div className="gallery-card">
            <img src={gallery1} alt="Meal Plan" />

            <div className="gallery-content">
              <h3>Meal Planning</h3>
              <p>View meals, calories, macros, and nutrition details.</p>
            </div>
          </div>

          <div className="gallery-card">
            <img src={gallery2} alt="Shopping List" />

            <div className="gallery-content">
              <h3>Shopping List</h3>
              <p>Generate grocery lists based on the selected nutrition plan.</p>
            </div>
          </div>

          <div className="gallery-card">
            <img src={gallery3} alt="Medical Support" />

            <div className="gallery-content">
              <h3>Medical Support</h3>
              <p>Connect with nutrition specialists for guidance and support.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <h2>About Data Diet</h2>

        <p>
          Data Diet was inspired by a real challenge many people face when
          trying to maintain a healthy lifestyle. We often struggled to create
          personalized nutrition plans that were easy to follow, practical to
          maintain, and simple to revisit later. Another challenge was
          organizing the shopping process after creating a diet plan, so we
          built a solution that generates personalized plans, saves plan
          history, and creates shopping lists automatically.
        </p>

        <p className="holberton-note">
          This project was developed as a Portfolio Project for Holberton
          School.
        </p>

        <div className="team-section">
          <h3>Meet the Team</h3>

          <div className="team-grid">
            <div className="team-card">
              <h4>Ali Summan</h4>
              <a
                href="https://github.com/aliabdullah1215"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ali-summan-9a39102aa"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>

            <div className="team-card">
              <h4>Omar Alanzi</h4>
              <a
                href="https://github.com/omar-hail"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/omar-alanzi-6138062b7"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>

            <div className="team-card">
              <h4>Mohammed Basuliman</h4>
              <a
                href="https://github.com/oDoDyK"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mohammed-basulayman-0a687a333?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>

            <div className="team-card">
              <h4>Hussam Alshalahi</h4>
              <a
                href="https://github.com/AoximL"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/hussam-alshalahi-9066b5272"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <a
            href="https://github.com/aliabdullah1215/holbertonschool-portfolio_project"
            target="_blank"
            rel="noreferrer"
            className="repo-btn"
          >
            View Project Repository
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;