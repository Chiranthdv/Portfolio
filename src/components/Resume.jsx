import './Resume.css'; // optional: if you want to style it separately

const Resume = () => {
  return (
    <div className="resume-container">
      <h1 style={{marginTop:"20px"}}>My Resume</h1>

      <a
        href="https://drive.google.com/uc?export=download&id=1Mv3GsHGe1UznpSnWp7aZaQVaRxzn4A5M"
        download
        className="download-resume-btn"
      >
        Download Resume
      </a>

      <iframe
        src="https://drive.google.com/file/d/1Mv3GsHGe1UznpSnWp7aZaQVaRxzn4A5M/preview"
        width="100%"
        height="900px"
        style={{ border: 'none', marginTop: '20px' }}
        title="Resume"
      >
        Your browser does not support PDFs. Please download the resume instead.
      </iframe>
    </div>
  );
};

export default Resume;
