import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"
import InViewMonitor from 'react-inview-monitor';
import SectionTitle from  "@components/atoms/section_title";
import Timeline from "@components/molecules/timeline";
import json from "@contents/jsons/works";

const Section = styled.section`
  ${tw`w-full`};
`

const Works = () => (
  <Section>
    <InViewMonitor
      classNameNotInView='inview-section-hidden'
      classNameInView='inview-section-active'
    >
      <div className="container lg:w-2/3 mx-auto mb-10">
        <SectionTitle title="Work Experience" subtitle="職務経歴"  />
        <Timeline works={json} />
      </div>
    </InViewMonitor>
  </Section>
)

export default Works