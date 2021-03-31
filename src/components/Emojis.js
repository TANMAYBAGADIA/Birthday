import React from 'react';

export default ({ emojiList }) => {
  return (
    <div className="emojiWrapper">
      {emojiList.map(({ symbol }, i) => (
        <span key={i} className="emojiSymbol">
          {symbol}
        </span>
      ))}
    </div>
  );
};
