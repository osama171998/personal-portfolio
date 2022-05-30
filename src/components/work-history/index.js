import React from "react";
import * as GlobalStyles from "../utils/globalStyles";
import * as Styles from "./style";
import { History } from "./history";
function WorkHistory() {
  return (
    <GlobalStyles.Container id="work-history" data-aos="fade-in">
      <GlobalStyles.HeadingOne>Work History</GlobalStyles.HeadingOne>
      <Styles.WorkHistoryContainer>
        {[...History].reverse().map((info) => {
          return (
            <Styles.HistoryDetailContainer key={info.index} icon={info.icon}>
              <Styles.HistoryDetail
                className={Number(info.index) % 2 === 0 ? "right" : "left"}
              >
                <Styles.Info>
                  <Styles.Heading>Employer Name :</Styles.Heading>
                  <Styles.Content>{info.employerName}</Styles.Content>
                </Styles.Info>
                <Styles.Info>
                  <Styles.Heading>Designation :</Styles.Heading>
                  <Styles.Content>{info.designation}</Styles.Content>
                </Styles.Info>
                <Styles.Info>
                  <Styles.Heading>Tenure :</Styles.Heading>
                  <Styles.Content>{info.tenure}</Styles.Content>
                </Styles.Info>
              </Styles.HistoryDetail>
            </Styles.HistoryDetailContainer>
          );
        })}
      </Styles.WorkHistoryContainer>
    </GlobalStyles.Container>
  );
}

export default WorkHistory;
