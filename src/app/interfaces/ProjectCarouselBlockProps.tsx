import {IProject} from "../static/json/projectDetails";

export interface ProjectCarouselBlockProps {
  content: {
    buttons: {
      content: string;
      link: string;
    }[];
    slider: IProject[];
  };
}
