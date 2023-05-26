import styled from "styled-components";
import { colorShades } from "../utils/colorShades";
export const WorkHistoryContainer = styled.div`
  position: relative;
  margin: 0 auto;
  z-index: 1;
  width: 95%;
  :after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 5px;
    background-color: ${colorShades.green};
    margin-left: -3px;
    @media only screen and (max-width: 900px) {
      left: 10%;
    }
  }
`;

export const HistoryDetailContainer = styled.div`
  position: relative;
  width: 50%;
  @media screen and (max-width: 900px) {
    width: 80%;
  }
  :after {
    content: "";
    position: absolute;
    top: 40%;
    right: -1rem;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    z-index: 1;
    background-image: url(${({ icon }) => icon});
    background-size: 100% 100%;
    filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5));
    @media screen and (max-width: 900px) {
      left: 9%;
    }

    @media only screen and (max-width: 600px) {
      left: 7%;
    }

    @media only screen and (max-width: 450px) {
      left: 5%;
    }
  }

  .left {
    left: 0;

    @media only screen and (max-width: 900px) {
      left: 25%;
    }
  }
  .right {
    left: 100%;
    @media only screen and (max-width: 900px) {
      left: 25%;
    }
  }
`;

export const HistoryDetail = styled.section`
  position: relative;
  margin: 1% 5%;
  padding: 2rem 1rem;
  background-color: ${colorShades.grey};
  border-radius: 12px;
  border: 1px solid ${colorShades.green};
  cursor: pointer;
  user-select: none;
  &:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    transition: all 0.6s ease-in-out;
  }
  @media only screen and (max-width: 600px) {
    margin: 2rem 1%;
  }
`;

export const Info = styled.div`
  display: flex;
  line-height: 2rem;
  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
export const Heading = styled.h4`
  min-width: 170px;
`;
export const Content = styled.p`
  color: black;
`;
