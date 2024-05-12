import linkedinIcon from '../images/linkedin.svg';
import igIcon from '../images/instagram.svg';
import fbIcon from '../images/facebook.svg';
import youtubeIcon from '../images/youtube.svg';
import blueprintIcon from '../images/blueprint_banner_negative.webp';

const footerJson = {
  blueprintIcon: blueprintIcon,

  social: [
    {
      key: 1,
      img: linkedinIcon,
      url: 'https://www.linkedin.com/company/cublueprint/about/',
    },
    {
      key: 2,
      img: igIcon,
      url: 'https://www.instagram.com/cublueprint/?hl=en',
    },
    {
      key: 3,
      img: fbIcon,
      url: 'https://www.facebook.com/cublueprint/',
    },
    {
      key: 4,
      img: youtubeIcon,
      url: 'https://www.youtube.com/channel/UCVp-L_xBDxORfU_-lXCs_6g/videos?view=0',
    },
  ],

  links: [
    {name: "about us", link: "/about"},
    {name: "projects", link: "/projects"},
    {name: "teams", link: "/teams"},
    {name: "apply as a student", link: "/apply/student"},
    {name: "apply as a nonprofit", link: "/apply/non-profit"},
    {name: "contact us", link: "/contact"}
  ],
  // End Contact Section ---------------
};

export default footerJson;
