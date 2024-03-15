import AboutTitleImage from '../images/about-page/titleImage.svg';
import ValuesImage1 from '../images/about-page/values/values1.svg';
import ValuesImage2 from '../images/about-page/values/values2.svg';
import ValuesImage3 from '../images/about-page/values/values3.svg';
import ValuesImage4 from '../images/about-page/values/values4.svg';
import ValuesImage5 from '../images/about-page/values/values5.svg';
import MissionImage from '../images/about-page/mission.svg';

const aboutContent = {
    titleBlock: {
        title:'About The Club',
        subtitle: 'We\'re a club at Carleton University that develops pro-bono apps for nonprofits and promotes tech for social good.',
        image: {
            picture: AboutTitleImage,
            alt: 'about title block picture',
        },
        buttons: [
        {
            content: 'OUR TEAM',
            link: '/teams',
        },
        ]
    },
    mission: { 
        image: { 
            src: MissionImage,
            alt: 'mission statement content block picture'
        },
        description: "To make beautiful engineering accessible and useful for those who create communities and promote public welfare."
    },
    values: [
        {
            title: '01 Mission First',
            description: 'We as Blueprint members ultimately unify under one goal - achieving our mission. We place the interests of the people and partners we serve above our own. Our primary measure of success is the amount of positive impact we create through our work.',
            image: {
                src: ValuesImage1,
                alt: 'values 1 image'
            }
        },
        {
            title: '02 Perpetual Growth',
            description: 'We as Blueprint members value the academic, social, and personal growth of our peers. We constantly seek to perpetuate the cycle of learning and teaching, for our benefit and for others. We strive to offer a helping hand in times of need and push each other to succeed.',
            image: {
                src: ValuesImage2,
                alt: 'values 2 image'
            }
        },
        {
            title: '03 Cherish Culture',
            description: 'We as Blueprint members seek to cherish our time spent together. We develop meaningful relationships that extend well beyond the scope of the organization. We value each other as individuals and appreciate our differences.',
            image: {
                src: ValuesImage3,
                alt: 'values 3 image'
            }
        },
        {
            title: '04 Innovate',
            description: 'We as Blueprint members recognize that change is both inevitable and necessary. We are committed to innovate and emphasize effective solutions as needed in order to remain relevant - nothing is sacred. We welcome new ideas and diverse thinking.',
            image: {
                src: ValuesImage4,
                alt: 'values 4 image'
            }
        },
        {
            title: '05 Stay Humble',
            description: 'We as Blueprint members strive to remain humble, accept our imperfections, and be receptive to feedback. We approach challenges with an open mind and remember that anyone can pursue social good, not just Blueprint.',
            image: {
                src: ValuesImage5,
                alt: 'values 5 image'
            }
        }
    ],
    banner: {
        text: 'Know more about the people behind the scenes!',
        button: {
            content: 'Our Team',
            link: '/teams'
        }
    }
}

export default aboutContent