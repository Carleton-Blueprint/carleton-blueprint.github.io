import BeneficientLogo from '../images/beneficient_logo_square.png';
import RefugeeCentreLogo from '../images/AlloCanada_logo_square.png';
import UrbanMindsLogo from '../images/UrbanMinds_logo_square.png';
import CIWHVLogo from '../images/CIWHV_logo_square.png';
import BeneficientSolution from '../images/BeneficientSolution.png';
import UrbanMindsSolution from '../images/UrbanMindsSolution.png';
import AlloCanadaSolution from '../images/AlloCanadaSolution.png';

interface IProject {
    name: string;
    description: string;
    problem: string;
    solution: string;
    solutionImage?: any;
    deployedLink: string;
    gitlabLink: string;
    link: string;
    image: any;
}

interface IProjectDetails {
    currentProjects: {[key: string]: IProject};
    pastProjects: {[key: string]: IProject};
}

const projectDetails: IProjectDetails = {
    currentProjects: {
        CIWHV: {
            name: 'CIWHV',
            description: 'We are developing a web platform for called Workplace Stop, a toolkit for workers in Canada to navigate the various systems when experiencing bullying, harassment, or systemic or psychological harm.',
            problem: 'Employees experiencing workplace harassment often face difficulty navigating the legal and health processes to resolve their situation, on top of the emotional and physical stress they may be enduring.  The CIWHV wanted a platform that enabled workers to better understand their situation and provide clear information on the next steps they should take.',
            solution: 'Our solution is currently under development! Please check back in later to learn more.',
            deployedLink: '#',
            gitlabLink: '#',
            link: '/Projects/CIWHV',
            image: CIWHVLogo,
          },
    },
    pastProjects: {
        Beneficient: {
            name: 'Beneficient',
            description: 'We developed a web application that allows Beneficent to better track their interest-free loan lending program.',
            problem: 'Beneficent Relief is a charity that provides interest-free loans to those in need, with the goal of breaking the debt cycle. They also provide financial coaching for eligible clients. When we partnered with Beneficent in 2020, they were a small team with a growing client base, and were previously using multiple tools to track their loan processes (excel sheets, trello, slack). This became very inefficient and unorganized, and creating the need for a centralized solution to manage their clientele.',
            solution: 'The solution we created centralized all their resources onto one platform, as seen in this demo. It had a separate catagory to track pending transactions, their status and a payment calendar for each client. The solution also featured a separate tab to track client and account manager information.',
            solutionImage: BeneficientSolution,
            deployedLink: '/#',
            gitlabLink: 'https://gitlab.com/cublueprint/beneficent',
            link: '/Projects/Beneficient',
            image: BeneficientLogo,
        },
        'AlloCanada': {
            name: 'Allo Canada',
            description: 'We are developing a web application that centralizes services which newcomers often need to access throughout their settlement and integration journeys.',
            problem: 'Newcomers to Canada are faced with many challenges when navigating their integration journey, from understanding the different government processes to finding housing for themselves. The Refugee Center wanted to develop a platform where immigrants and newcomers can find streamlined, accessible information that is customized to their specific situation.',
            solution: 'Our deployed solution is linked at the top of this page! To an anonymous user, it features an intuitive landing page to get new users started, an about us page, FAQ page and an explore page to locate helpful resources within a user specified radius. A signed in user can customize their resources based on need. It also contains translations for users in English, French, Spanish and Arabic.',
            solutionImage: AlloCanadaSolution,
            deployedLink: 'https://dev2.allocanada.org/home',
            gitlabLink: '/#',
            link: '/Projects/AlloCanada',
            image: RefugeeCentreLogo,
        },
        'UrbanMinds': {
            name: 'Urban Minds',
            description: 'We are developing a web application that allows them to empower youth to take on more city-building related projects in their community.',
            problem: 'Urban Minds is a Canadian non-profit organization with a mission to create meaningful ways for youth to shape equitable and sustainable cities. They use initiatives, such as the "1UP Youth City Builders" Program to inspire and equip high school students to lead their own community design-build projects and co-design spaces with our clients. However, they lacked a platform that could be used to promote their organization and 1UP program to the community.',            
            solution: 'Since 2021, Blueprint partnered with Urban minds to develop a web app that lets them empower youth to take on more city-building related projects in their community. As you can see from our mock up, the website featured a points system to incentivize users and a filter feature to connect to opportunities around them!',
            solutionImage: UrbanMindsSolution,
            deployedLink: '/#',
            gitlabLink: 'https://gitlab.com/cublueprint/urbanminds',
            link: '/Projects/UrbanMinds',
            image: UrbanMindsLogo,
        },
    }
}

export { projectDetails };
export type { IProject };
