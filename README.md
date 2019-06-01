# react-vis-styles

[![npm](https://img.shields.io/npm/v/react-vis-styles.svg)](https://www.npmjs.com/package/react-vis-styles)
[![npm](https://img.shields.io/npm/dm/react-vis-styles.svg)](https://www.npmjs.com/package/react-vis-styles)
[![Build Status](https://travis-ci.org/swiftcarrot/react-vis-styles.svg?branch=master)](https://travis-ci.org/swiftcarrot/react-vis-styles)
[![codecov](https://codecov.io/gh/swiftcarrot/react-vis-styles/branch/master/graph/badge.svg)](https://codecov.io/gh/swiftcarrot/react-vis-styles)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

[react-vis](https://github.com/uber/react-vis) external styles as react component (so you can avoid bundling css)

### Installation

```sh
yarn add react-vis-styles
npm install react-vis-styles --save
```

### Demo

[https://swiftcarrot.dev/react-vis-styles](https://swiftcarrot.dev/react-vis-styles)

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

with props

```javascript
<LegendsStyle enabledColor="#3a3a48" disabledColor="#b8b8b8" />
```

### License

MIT
