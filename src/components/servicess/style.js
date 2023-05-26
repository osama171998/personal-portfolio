import styled from "styled-components";
import { colorShades } from "../utils/colorShades";
export const ServiceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  column-gap: 2rem;
  row-gap: 2rem;
  padding: 2rem 0;
`;

export const ServiceCard = styled.div`
  width: 45%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  border: 1px solid ${colorShades.green};
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    transition: all 0.6s ease-in-out;
  }
  @media screen and (max-width: 900px) {
    width: 80%;
  }
  @media screen and (max-width: 400px) {
    width: 90%;
  }
`;

export const ServiceIconContainer = styled.div``;

export const ServiceIcon = styled.img``;

export const ServiceName = styled.p`
  font-size: 1.5rem;
  text-align: center;
`;
