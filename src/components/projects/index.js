import React from "react";
import * as GlobalStyles from "../utils/globalStyles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { ProjectsHistory } from "./projects";
import * as Styles from "./style";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = () => {
  return (
    <GlobalStyles.Container id="projects" data-aos="fade-in">
      <GlobalStyles.HeadingOne>Projects</GlobalStyles.HeadingOne>
      <Styles.SwiperContainer>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          spaceBetween={50}
          allowSlideNext={true}
          allowSlidePrev={true}
          autoplay={{
            pauseOnMouseEnter: true,
            delay: 3000,
          }}
          loop={true}
          navigation={true}
          breakpoints={{
            1100: {
              slidesPerView: 3,
            },
            800: {
              slidesPerView: 2,
            },
          }}
        >
          {ProjectsHistory.map((prj) => {
            return (
              <SwiperSlide key={prj.index}>
                <Styles.SlideContent>
                  <Styles.RedirectToProject href={prj.url} target="_blank">
                    <Styles.ThumbnailContainer>
                      <Styles.Thumbnail src={prj.thumbnail} alt={prj.name} />
                    </Styles.ThumbnailContainer>
                    <Styles.ProjectName>{prj.name}</Styles.ProjectName>
                  </Styles.RedirectToProject>
                </Styles.SlideContent>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Styles.SwiperContainer>
    </GlobalStyles.Container>
  );
};
export default Projects;
