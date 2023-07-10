import React from "react";
import FormQuestions from "./FormQuestions";

const Information = ({ prop }) => {
  return (
    <div className="row">
      <div className="col-lg-6 mb-2 mb-lg-0">
        <h2 className="title mb-1">Contact Information</h2>
        <p className="mb-3">
          Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui,
          eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu,
          fermentum et, dapibus sed, urna.
        </p>
        <div className="row">
          <div className="col-sm-7">
            <div className="contact-info">
              <h3>The Office</h3>
              <ul className="contact-list">
                <li>
                  <i className="icon-map-marker" /> 70 Washington Square South
                  New York, NY 10012, United States
                </li>
                <li>
                  <i className="icon-phone" />
                  <a href="tel:#">+92 423 567</a>
                </li>
                <li>
                  <i className="icon-envelope" />
                  <a href="mailto:#">info@Molla.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="contact-info">
              <h3>The Office</h3>
              <ul className="contact-list">
                <li>
                  <i className="icon-clock-o" />
                  <span className="text-dark">Monday-Saturday</span>
                  <br />
                  11am-7pm ET
                </li>
                <li>
                  <i className="icon-calendar" />
                  <span className="text-dark">Sunday</span>
                  <br />
                  11am-6pm ET
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <h2 className="title mb-1">Got Any Questions?</h2>
        <p className="mb-2">
          Use the form below to get in touch with the sales team
        </p>
        <FormQuestions submitForm={prop} />
      </div>
    </div>
  );
};

export default Information;
