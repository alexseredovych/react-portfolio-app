import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoMdSchool } from "react-icons/io";
import { IoMdBriefcase } from "react-icons/io";

const Experience = () => {
  return (
    <div className=" bg-[#0a2f1c]">
      <div className="flex justify-center">
        <p className="mb-4 sm:text-right text-4xl inline font-bold border-b-4 border-yellow-600 text-gray-300">
          Experience
        </p>
      </div>
      <div name="experience" className="experience w-full bg-[#0a2f1c]">
        {/* Container */}
        {/* <div className="max-w-[1000px] mx-auto px-8 h-full"> */}

        <VerticalTimeline lineColor="white">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2012 - 2014"
            dateClassName="text-8xl font-bold inline text-white"
            iconStyle={{ background: "#333333", color: "#fff" }}
            icon={<IoMdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Wroclaw University of Science and Technology
            </h3>
            <p>Bachelor's degree, System Engineering</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2015 - 2015"
            dateClassName="text-8xl font-bold inline text-white"
            iconStyle={{ background: "#c28c19", color: "#fff" }}
            icon={<IoMdBriefcase />}
          >
            <h3 className="vertical-timeline-element-title">
              Jr Software QA Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Quality Assurance Group Inc. (Lviv, Ukraine)
            </h4>
            <p>
              Analyzed the PRD & Functional Specification, Participated in daily
              stand-up and defect review, Developed test cases against business
              requirements, Performed black box, gray box, UI, smoke,
              regression, and boundary testing, Reported and tracked bugs in
              Jira.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2015 - 2019"
            dateClassName="text-8xl font-bold inline text-white"
            iconStyle={{ background: "#c28c19", color: "#fff" }}
            icon={<IoMdBriefcase />}
          >
            <h3 className="vertical-timeline-element-title">
              Software QA Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Astra Inc. (Chicago, IL)
            </h4>
            <p>
              Tested the application on different mobile and web platforms,
              Worked with Customer Support team triaging production bugs, Kept
              track of the new requirements, Performed smoke, functional, UI,
              regression testing, Participated in daily stand-ups and sprint
              planning, Tracked and reported defects in Jira bug tracking
              system, Developed test cases against business requirements using
              TestRail, Used Chrome DevTools for testing Web applications,
              Prepared status summary reports with details of executed.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - 2020"
            dateClassName="text-8xl font-bold inline text-white"
            iconStyle={{ background: "#c28c19", color: "#fff" }}
            icon={<IoMdBriefcase />}
          >
            <h3 className="vertical-timeline-element-title">
              Senior Quality Assurance Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Elexa Consumer Products. (Deerfield, IL)
            </h4>
            <p>
              Leaded the testing efforts for launching Guardian - Elexa's IoT
              project, Developed QA documentation: Test Plans, Test Suites,
              Test, Cases, Check Lists, Bug Reports, Traceability Matrices
              Tested mobile (IOS, Android), web-based and cloud applications,
              Collaborated with Customer Support team on production bugs
              Performed Regression, Integration, System, UI, Compatibility,
              End-to-end and Acceptance testing, Identified, reported software
              bugs, Ensured the complete test coverage of all product
              requirements, Created and provided weekly status reports to the
              stakeholders
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - now"
            dateClassName="text-8xl font-bold inline text-white"
            iconStyle={{ background: "#c28c19", color: "#fff" }}
            icon={<IoMdBriefcase />}
          >
            <h3 className="vertical-timeline-element-title">
              Front-End Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Larixoft Solutions LLC. (Lviv, Ukraine - remote)
            </h4>
            <p>
              Developed several corporate websites using HTML, CSS, JavaScript,
              jQuery, Bootstrap, Tailwind and/or Sass, Created user-centered,
              modern, and interactive experiences, Went through multiple
              iterations of the websites, making adjustments as the clients
              requested through weekly meetings, Customized React templates to
              meet the needs of the client and their users, Used technologies
              such as HTML5, CSS3 and React.js to create modular front-end
              applications
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
