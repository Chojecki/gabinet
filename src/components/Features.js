import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <div>
    {gridItems.map((item, index) => (
      <div key={item.text} className="columns is-12">
        {index % 2 == 0 && (
          <div className="column">
            <PreviewCompatibleImage imageInfo={item} />
          </div>
        )}
        <div className="column">
          <p>{item.text}</p>
        </div>
        {index % 2 != 0 && (
          <div className="column">
            <PreviewCompatibleImage imageInfo={item} />
          </div>
        )}
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
