export interface TitleBlockProps {
  content: {
    title: string;
    subtitle: string;
    image: {
      picture: any;
      alt: string;
      border?: boolean;
    };
    buttons: {
      content: string;
      link: string;
    }[];
  };
}
