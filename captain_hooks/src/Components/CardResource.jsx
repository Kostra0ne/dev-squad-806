import React from "react";
import Card, { Title, Content } from "Components/Card";
import "styles/CardResource.scss";

const CardResource = ({ url, description, title }) => {
  return (
    <a
      className="CardResource"
      href={url}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Card theme="dark">
        <Title className="react-blue">{title}</Title>
        <Content>{description}</Content>
      </Card>
    </a>
  );
};

export default CardResource;
