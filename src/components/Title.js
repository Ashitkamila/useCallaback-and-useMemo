import React from 'react';

function Title() {
    console.log('Rendering title');
  return <div>
      Title Component
  </div>;
}

export default React.memo(Title);
