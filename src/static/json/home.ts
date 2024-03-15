import HomePicture from '../images/homepic.png';
import AboutPicture from '../images/about.svg';
import ApplyPicture from '../images/apply.svg';
import ContactPicture from '../images/contact.svg';
import {projectDetails, IProject} from "./projectDetails";

import BlueprintPicture from '../images/blueprint.png';

const currentProjects: IProject[] = Object.values(projectDetails.currentProjects);
const pastProjects: IProject[] = Object.values(projectDetails.pastProjects);
const projects: IProject[] = currentProjects.concat(pastProjects); 

const homeContent = {
  titleBlock: {
    title: 'Tech for social good',
    subtitle: "We're a team of students at Carleton University that develop pro-bono apps for nonprofits and promote tech for social good.",
    image: {
      picture: HomePicture,
      alt: 'title picture',
    },
    buttons: [
      {
        content: 'LEARN MORE',
        link: '/About',
      },
      {
        content: 'APPLY',
        link: '/Apply',
      },
    ],
  },
  aboutBlock: {
    title: 'About Us 💡',
    subtitle:
      'Blueprint strives to make technology accessible and useful for those who create communities and promote public welfare.',

    image: {
      picture: AboutPicture,
      alt: 'title picture',
    },
    buttons: [
      {
        content: 'READ MORE',
        link: '/About',
      },
    ],
    style: 'right'
  },
  projectsBlock: {
    title: 'Projects 🗃️',
    subtitle:
    "Check out our projects!",
    image: {
      picture: AboutPicture,
      alt: 'about picture',
    },
    buttons: [
      {
        content: 'READ MORE',
        link: '/About',
      },
    ],
    slider: projects
  },
  getInvolvedBlock: {
    title: 'Get Involved 🤝',
    subtitle:
      'Blueprint strives to make technology accessible and useful for those who create communities and promote public welfare.',
    image: {
      picture: ApplyPicture,
      alt: 'apply picture',
    },
    buttons: [{
      content: 'APPLY',
      link: '/Apply',
    }],
    style: 'left'
  },
  contactUsBlock: {
    title: 'Contact Us 📧',
    subtitle:
      'Blueprint strives to make technology accessible and useful for those who create communities and promote public welfare.',
    image: {
      picture: ContactPicture,
      alt: 'contact picture',
    },
    buttons: [{
      content: 'CONTACT US',
      link: '/Contact',
    }],
    style: 'right'
  },
};

export default homeContent;
