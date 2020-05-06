/* eslint-disable react/prop-types */
import React from 'react';
import HighlightsListEntry from './HighlightsListEntry';

const HighlightsList = (props) => {
  const { highlights } = props;
  if (highlights === undefined) {
    return (
      <div />
    );
  }
  return (
    <div className="highlightsList">
      {highlights.map((highlight) => {
        const { emblem, text, title } = highlight;
        if (highlight.boolean === true) {
          return (
            // eslint-disable-next-line no-underscore-dangle
            <HighlightsListEntry key={highlight._id} emblem={emblem} text={text} title={title} />
          );
        }
      })}
    </div>
  );
};

export default HighlightsList;
