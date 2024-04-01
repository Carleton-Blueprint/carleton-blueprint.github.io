import TeamsTitleImage from '../images/teams_title_block.png'; 
import AboutPicture from '../images/Team spirit-pana.svg';

import {projectDetails, IProject} from "./projectDetails";

const currentProjects: IProject[] = Object.values(projectDetails.currentProjects);
const pastProjects: IProject[] = Object.values(projectDetails.pastProjects);

const projectsPageContent = {
  titleBlock: {
    title: 'Our Projects',
    subtitle: 'All of Blueprint’s work is open source because we believe in building technology that makes us more open and connected.',
    image: {
      picture: TeamsTitleImage, 
      alt: 'title picture',
    },
    buttons: [
      {
        content: 'Visit our GitLab',
        link: '#', 
      },
    ],
  },
  currentProjects: 
    {
      title: "Current Projects",
      subtitle: "Subtitle",
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
      slider: currentProjects,
    },
  pastProjects: 
    {
      title: "Current Projects",
      subtitle: "Subtitle",
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
      slider: pastProjects
    },
  banner: {
    text: 'Fill out our application form to be our next project',
    button: {
        content: 'Apply >',
        link: '/apply/non-profit'
    }
  }
};

export default projectsPageContent;
