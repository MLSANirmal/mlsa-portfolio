import React from "react";


import background from "../images/background.jpg";

const imageAltText = "purple and blue abstract background";


const description =
  "I'm Nirmal Naveen Chandrasiri, a cloud and DevOps enthusiast with experience in full stack web development. I thrive on leveraging cloud platforms like AWS, Azure, and GCP to create scalable architectures. With expertise in CI/CD pipelines and automation tools, I streamline development processes. My passion for learning and problem-solving helps me drive results in collaborative environments.";


const skillsList = [
  "Docker",
  "Kubernetes",
  "Web Designing",
  "Cloud Computing",
  "MERN Stack",
  "App Development",
];


const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my DevOps experience I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={background} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
