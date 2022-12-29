import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <section className="experience">
      <div className="container">
        <h2 className="mt-5">Work Experience</h2>
        <VerticalTimeline lineColor="#474747" animate={true}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(19, 68, 158)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(19, 68, 158)" }}
            dateClassName="text-black text-start"
            date="November 2022 - Now"
            iconStyle={{
              background: "rgb(19, 68, 158)",
              color: "#fff",
              width: "30px",
              height: "30px",
              marginTop: "15px",
              marginLeft: "-15px",
            }}
          >
            <h4 className="vertical-timeline-element-title">
              <strong>Laboratorium Assistant</strong>
            </h4>
            <h5 className="vertical-timeline-element-subtitle">
              Universitas Dian Nuswantoro
            </h5>
            <h5 className="mt-2 text-start">Assistant</h5>
            <div>
              <ul>
                <li className="text-start">
                  Help certain lecturer students who experience errors
                </li>
              </ul>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            dateClassName="text-black"
            date="November 2022 - December 2022"
            iconStyle={{
              background: "rgb(209, 46, 57)",
              color: "#fff",
              width: "30px",
              height: "30px",
              marginTop: "15px",
              marginLeft: "-15px",
            }}
          >
            <h4 className="vertical-timeline-element-title">
              <strong>Front End Developer</strong>
            </h4>
            <h5 className="vertical-timeline-element-subtitle">
              PT. Graphie Global Interaktif
            </h5>
            <h5 className="mt-2 text-start">Tabpedia</h5>
            <div>
              <ul>
                <li className="text-start">
                  Developing dashboard using ReactJS
                </li>
                <li className="text-start">
                  Managed to make dummy CRUD for testing
                </li>
                <li className="text-start">
                  Push, pull, and merge code using Git
                </li>
                <li className="text-start">
                  Successfully completed the displacement project
                </li>
              </ul>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            dateClassName="text-black text-start"
            date="August 2022 - December 2022"
            iconStyle={{
              background: "rgb(46, 209, 84)",
              color: "#fff",
              width: "30px",
              height: "30px",
              marginTop: "15px",
              marginLeft: "-15px",
            }}
          >
            <h4 className="vertical-timeline-element-title">
              <strong>Front End Developer</strong>
            </h4>
            <h5 className="vertical-timeline-element-subtitle">
              PT. Abbauf Mulia Konsultan Teknologi
            </h5>

            <h5 className="mt-2 text-start">WebGIS Intelligence</h5>
            <div>
              <ul>
                <li className="text-start">
                  Developing dashboard using CodeIgniter 4
                </li>
                <li className="text-start">
                  Push, pull, and merge code using Git
                </li>
                <li className="text-start">
                  Successfully work as a team to develop a dashboard
                </li>
              </ul>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
