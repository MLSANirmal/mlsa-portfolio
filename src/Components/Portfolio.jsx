/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Mozilla Firefox Technology & Services",
    description:
      "Mozilla is a prominent technology organization known for its contributions to open-source software and the development of popular applications and tools. Here's a brief overview of Mozilla and its key technologies:",
    url: "https://nirmalnaveen.medium.com/mozilla-firefox-technology-services-47da30e6c8d7",
  },
  {
    title: "RoyalLands - MERN Stack Real Estate Website",
    description:
      "RoyalLands is a full-stack web application built using the MERN Stack. The web application is designed to simplify the process of finding and renting properties, making it easier for users to browse through available properties and connect with agents.",
    url: "https://github.com/NirmalNaveen20/royal-lands",
  },
  {
    title: "Flavorshare Social Media React App",
    description:
      "This is a social media app built using React and Redux, with a beautiful UI powered by Chakra UI. With Flavorshare, users can register and create new posts to share with their friends and followers. They can also like and comment on other users' posts, and save their favorite posts for later.",
    url: "https://github.com/NirmalNaveen20/flavorshare",
  },
  {
    title: "Introduction to Developer Tools with AWS",
    description:
      "AWS cloud developer tools, it will want to get to know the following developer tool services mentioned in this article.",
    url: "https://nirmalnaveen.medium.com/introduction-to-developer-tools-with-aws-279b5395a3ed",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
