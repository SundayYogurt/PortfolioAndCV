
import profile from "../assets/images/profile.jpg";
import Krit from "../assets/download/Krit.pdf"

const FeaturedBox = () => {
  const handleViewCV = () => {
    window.open(Krit, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>KRITSANA PIWGRAM</span>
        </div>
        <div className="featured-name">
          I'm <span className="typedText"></span>
        </div>

        <div className="featured-text-info">
          <p>
            Hello! I am a passionate Full Stack Web Developer with proficiency
            in multiple programming languages, including C++, PHP, HTML, CSS,
            JavaScript, React. I also have experience in designing databases and
            creating diagrams to assist in planning.
          </p>
        </div>

        <div className="featured-text-btn">
          <button
            onClick={handleViewCV}
            className="btn"
            type="button"
          >
            View CV <i className="uil uil-file-download-alt"></i>
          </button>
        </div>

        <div className="social_icons">
          <div className="icon">
            <a href="https://www.instagram.com/se_npru" target="_blank" rel="noopener noreferrer">
              <i className="uil uil-instagram-alt"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://www.facebook.com/kritsana.piwgram.2024" target="_blank" rel="noopener noreferrer">
              <i className="uil uil-facebook-f"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://github.com/SundayYogurt" target="_blank" rel="noopener noreferrer">
              <i className="uil uil-github"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="featured-image">
        <div className="image">
          <img src={profile} alt="profile" />
        </div>
      </div>

      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <i className="uil uil-mouse-alt"></i>
          <p>Scroll Down</p>
        </a>
      </div>
    </section>
  );
};

export default FeaturedBox;
