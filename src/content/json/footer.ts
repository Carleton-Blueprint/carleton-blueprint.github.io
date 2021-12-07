import linkedinIcon from "../images/linkedin-icon.webp";
import igIcon from "../images/ig-icon.webp";
import fbIcon from "../images/fb-icon.webp";
import youtubeIcon from "../images/youtube-icon.webp";
import blueprintIcon from "../images/blueprint_banner_negative.webp";

const footerJson =  {

  blueprintIcon: blueprintIcon,
  
  social: [
    {
      key: 1,
      img: linkedinIcon,
      url: "https://www.linkedin.com/",
    },
    {
      key: 2,
      img: igIcon,
      url: "https://www.instagram.com",
    },
    {
      key: 3,
      img: fbIcon,
      url: "https://www.facebook.com/",
    },
    {
      key: 4,
      img: youtubeIcon,
      url: "https://www.youtube.com/channel/",
    },
  ],

  columns: [
    {
      title: "ABOUT",
      lis: [
        "item",
        "item",
        "item"
      ]
    },
    {
      title: "PROJECTS",
      lis: [
        "Current Projects",
        "Past Projects",
        "Apply"
      ]
    },
    {
      title: "TEAM",
      lis: [
        "Beneficent",
        "Urban Minds",
        "Blueprint Website",
        "Join Us"
      ]
    },
    {
      title: "CONTACT",
      lis: [
        "item",
        "item",
        "item"
      ]
    },
    {
      title: "ABOUT",
      lis: [
        "item",
        "item",
        "item"
      ]
    },
  ]
  // End Contact Section ---------------
}

export default footerJson; 