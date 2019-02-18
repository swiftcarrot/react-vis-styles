import React from 'react';
import { css, Global } from '@emotion/core';

const RadialChartStyle = () => (
  <Global
    styles={css`
      .rv-radial-chart {
        .rv-xy-plot__series--label {
          pointer-events: none;
        }
      }
    `}
  />
);

export default RadialChartStyle;
