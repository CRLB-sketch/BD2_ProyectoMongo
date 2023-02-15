import React, { useRef, useEffect } from 'react';

const TableauViz = () => {
  const vizContainer = useRef(null);

  useEffect(() => {
    const vizUrl = 'https://YOUR_TABLEAU_SERVER/views/YOUR_VIZ_NAME';
    const options = {
      hideTabs: true,
      width: '100%',
      height: '800px'
    };
    const viz = new window.tableau.Viz(vizContainer.current, vizUrl, options);
  }, []);

  return (
    <div ref={vizContainer} />
  );
};

export default TableauViz;