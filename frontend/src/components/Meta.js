import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to SpecTech",
  description: "We sell the best products for cheap",
  keywords: "clothing, buy clothes, cheap branded clothes",
};

export default Meta;
