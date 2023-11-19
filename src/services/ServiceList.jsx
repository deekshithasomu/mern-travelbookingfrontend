import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";
import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: `Calculate Weather`,
    desc: `The present weather condition in the tour is shown here`,
  },
  {
    imgUrl: guideImg,
    title: `Best Tour Guide`,
    desc: "The details of best tour guide is shown here",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: `The customization image of tour is shown here`,
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
