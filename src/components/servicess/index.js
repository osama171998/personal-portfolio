import React from "react";
import * as GlobalStyles from "../utils/globalStyles";
import * as Styled from "./style";
import frontend from "./assets/frontend.png";
import backend from "./assets/backend.png";
import apiIntegration from "./assets/api.png";
import deployment from "./assets/deployment.png";
const services = [
  {
    id: 1,
    icon: frontend,
    name: "Frontend Development",
    detail: "",
  },
  {
    id: 2,
    icon: backend,
    name: "Backend Development",
    detail: "",
  },
  {
    id: 3,
    icon: apiIntegration,
    name: "API Development and Integration",
    detail: "",
  },
  {
    id: 4,
    icon: deployment,
    name: "Deployment of Web Apps",
    detail: "",
  },
];
function Services() {
  return (
    <GlobalStyles.Container id="services">
      <GlobalStyles.HeadingOne>My Services</GlobalStyles.HeadingOne>
      <Styled.ServiceContainer>
        {services.map((service) => {
          return (
            <Styled.ServiceCard key={service.id}>
              <Styled.ServiceIconContainer>
                <Styled.ServiceIcon src={service.icon} />
              </Styled.ServiceIconContainer>
              <Styled.ServiceName>{service.name}</Styled.ServiceName>
            </Styled.ServiceCard>
          );
        })}
      </Styled.ServiceContainer>
    </GlobalStyles.Container>
  );
}

export default Services;
