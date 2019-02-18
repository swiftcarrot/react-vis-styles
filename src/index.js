import React, { Fragment } from 'react';
import LegendsStyle from './legends';
import PlotStyle from './plot';
import RadialChartStyle from './radial-chart';
import TreemapStyle from './treemap';

const RVStyle = () => (
  <Fragment>
    <LegendsStyle />
    <PlotStyle />
    <RadialChartStyle />
    <TreemapStyle />
  </Fragment>
);

export { LegendsStyle, PlotStyle, RadialChartStyle, TreemapStyle };
export default RVStyle;
