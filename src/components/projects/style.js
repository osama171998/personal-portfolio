import styled from "styled-components";
import { colorShades } from "../utils/colorShades";
export const SwiperContainer = styled.section`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;
export const SlideContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 1rem;
`;

export const RedirectToProject = styled.a`
  cursor: pointer;
  color: inherit;
  text-decoration: inherit;
  text-align: center;
  &:hover {
    color: ${colorShades.green};
  }
`;
export const ThumbnailContainer = styled.div`
  width: 300px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));
`;
export const Thumbnail = styled.img`
  width: 100%;
  height: auto;
`;
export const ProjectName = styled.div`
  font-size: 1.3rem;
  font-weight: 400;
`;
