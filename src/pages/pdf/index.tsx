import React from 'react';

const Pdf: React.FC = () => {
  const  [state,setState] = React.useState(1)
  return <div onClick={()=>{setState(state+1)}}>{state}</div>;
};

export default Pdf;
