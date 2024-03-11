import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { HomeBlockProps } from '../interfaces/HomeBlockProps';
import ProjectCard from './ProjectTextCard';

import { Splide, SplideSlide, SplideTrack, Options } from '@splidejs/react-splide';
import '@splidejs/react-splide/dist/css/splide.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';


const ProjectsTextMultiCarousel = ({ content }: HomeBlockProps) => {

  const [renderCarousel, setRenderCarousel] = useState<boolean>(false); 
  // if we don't use this state, the breakpoints don't take effect
  const [arrowRemoval, setArrowRemoval] = useState<number>(1);
  const [options, setOptions] = useState<Options>({
    type : 'slide',
    focus  : 'center',
    breakpoints: {
      1200: {
        perPage: 2,
        gap    : 5
      },
      900: {
        perPage: 1,
        gap    : 5,
      },
    },
  });

  useEffect(() => {
    const setBreakpoints = (options: Options): Options => {
      const sliderLength = content.slider?.length;
      if (sliderLength === 1){
        options["perPage"] = 1;
        setArrowRemoval(1);
      } else if (sliderLength === 2){
        options["perPage"] = 2;
        setArrowRemoval(2);
      } else {
        options["perPage"] = 3;
        if (sliderLength === 3){
          setArrowRemoval(3);
        }
      }

      return options;
    }

    let tempOptions = options;
    const newOptions = setBreakpoints(tempOptions);
    setOptions(newOptions);

    setRenderCarousel(true);
  }, [content, options]);


  return (
    <>
      <MobileProjects>
        {content.slider?.map((project) => (
            <ProjectCard props={project} />
        ))}
      </MobileProjects>

      {renderCarousel &&
        <CustomSplide hasTrack={ false } tag={"section"} options={options}>
          <CustomSplideTrack>
            {content.slider?.map((project) => (
              <SplideSlide>
                <ProjectCard props={project} />
              </SplideSlide>
            ))}
          </CustomSplideTrack>

          <div className="splide__arrows">
            <SplideArrow 
                className={`splide__arrow splide__arrow--prev removal-${arrowRemoval}`}
                icon={icon({ name: 'chevron-left'})} 
                color="#3988ff" />
            <SplideArrow 
                className={`splide__arrow splide__arrow--next removal-${arrowRemoval}`}
                icon={icon({ name: 'chevron-right'})} 
                color="#3988ff" />
          </div>
        </CustomSplide>
      }
    </>
  );
};

const SplideArrow = styled(FontAwesomeIcon)`
  z-index: 0;
  background: none;
  height: 40px;

  &.removal-1 {
    display: none;
  }

  &.removal-2 {
    @media (min-width: 900px) {
      display: none;
    }
  }

  &.removal-3 {
    @media (min-width: 1200px) {
      display: none;
    }
  }
`;

const CustomSplideTrack = styled(SplideTrack)`
  margin: 0 50px;
`;

const CustomSplide = styled(Splide)`
  margin-top: 50px;

  @media (max-width: 768px) {
      display: none;
  }

  .slider-arrow-more-1:disabled {
    opacity: 50%;
  }

  .splide__list {
    margin: 10px !important;
    overflow: visible;
  }

  .splide__pagination {
    padding-top: 50px;
    position: relative;

    &__page {
      background: ${(themeProps) => themeProps.theme.colors.borderBlue};

      &.is-active {
        background: ${(themeProps) => themeProps.theme.colors.primaryBlue};
      }
    }
  }
`;

const MobileProjects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 50px;
  @media (min-width: 769px) {  // Needs to be a manual number, if not nothing renders at 768px
    display: none;
  }
`;

export default ProjectsTextMultiCarousel;
