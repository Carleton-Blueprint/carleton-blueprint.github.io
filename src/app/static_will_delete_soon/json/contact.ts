import linkedinIcon from '../images/linkedin.svg';
import instagramIcon from '../images/instagram.svg';
import facebookIcon from '../images/facebook.svg';

const contactContent = {
    info: {
        email: "carletonblueprint@gmail.com",
        social: [
            {
                icon: {
                    src: linkedinIcon,
                    alt: 'linkedin'
                },
                link: 'https://www.linkedin.com/company/cublueprint/mycompany/'
            },
            {
                icon: {
                    src: instagramIcon,
                    alt: 'instagram'
                },
                link: 'https://www.instagram.com/cublueprint/'
            },
            {
                icon: {
                    src: facebookIcon,
                    alt: 'facebook'
                },
                link: 'https://www.facebook.com/cublueprint'
            }
        ]
    },
    banner: {
        text: 'Looking to join our team or be our next project?',
        button: {
            content: 'APPLY',
            link: '/apply'
        }
    }
}

export default contactContent;