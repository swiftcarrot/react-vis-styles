# react-vis-styles

### Installation

```sh
yarn add react-vis-styles
```

### Usage

```javascript
import React, { Fragment } from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries
} from 'react-vis';
import RVStyles from 'react-vis-styles';

function App() {
  return (
    <Fragment>
      <RVStyles />
      <XYPlot width={300} height={300}>
        <HorizontalGridLines />
        <LineSeries data={[{ x: 1, y: 10 }, { x: 2, y: 5 }, { x: 3, y: 15 }]} />
        <XAxis />
        <YAxis />
      </XYPlot>
    </Fragment>
  );
}
```

separated imports

```javascript
import {
  LegendsStyle,
  PlotStyle,
  RadialChartStyle,
  TreemapStyle
} from 'react-vis-styles';
```

### License

MIT
