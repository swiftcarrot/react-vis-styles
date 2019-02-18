import React from 'react';
import { css, Global } from '@emotion/core';

const PlotStyle = ({
  axisFontColor,
  axisLineColor,
  axisFontSize,
  tooltipBackground,
  tooltipColor,
  tooltipFontSize,
  tooltipBorderRadius,
  tooltipShadow,
  tooltipPadding
}) => (
  <Global
    styles={css`
      .rv-xy-plot {
        color: #c3c3c3;
        position: relative;

        canvas {
          pointer-events: none;
        }

        .rv-xy-canvas {
          pointer-events: none;
          position: absolute;
        }
      }

      .rv-xy-plot__inner {
        display: block;
      }

      .rv-xy-plot__axis__line {
        fill: none;
        stroke-width: 2px;
        stroke: ${axisLineColor};
      }

      .rv-xy-plot__axis__tick__line {
        stroke: ${axisLineColor};
      }

      .rv-xy-plot__axis__tick__text {
        fill: ${axisFontColor};
        font-size: ${axisFontSize};
      }

      .rv-xy-plot__axis__title {
        text {
          fill: ${axisFontColor};
          font-size: ${axisFontSize};
        }
      }

      .rv-xy-plot__grid-lines__line {
        stroke: $rv-xy-plot-axis-line-color;
      }

      .rv-xy-plot__circular-grid-lines__line {
        fill-opacity: 0;
        stroke: $rv-xy-plot-axis-line-color;
      }

      .rv-xy-plot__series,
      .rv-xy-plot__series path {
        pointer-events: all;
      }

      .rv-xy-plot__series--line {
        fill: none;
        stroke: #000;
        stroke-width: 2px;
      }

      .rv-crosshair {
        position: absolute;
        font-size: 11px;
        pointer-events: none;
      }

      .rv-crosshair__line {
        background: #47d3d9;
        width: 1px;
      }

      .rv-crosshair__inner {
        position: absolute;
        text-align: left;
        top: 0;
      }

      .rv-crosshair__inner__content {
        border-radius: ${tooltipBorderRadius};
        background: ${tooltipBackground};
        color: ${tooltipColor};
        font-size: ${tooltipFontSize};
        padding: $rv-xy-plot-tooltip-padding;
        box-shadow: $rv-xy-plot-tooltip-shadow;
      }

      .rv-crosshair__inner--left {
        right: 4px;
      }

      .rv-crosshair__inner--right {
        left: 4px;
      }

      .rv-crosshair__title {
        font-weight: bold;
        white-space: nowrap;
      }

      .rv-crosshair__item {
        white-space: nowrap;
      }

      .rv-hint {
        position: absolute;
        pointer-events: none;
      }

      .rv-hint__content {
        border-radius: ${tooltipBorderRadius};
        padding: ${tooltipPadding};
        font-size: ${tooltipFontSize};
        background: ${tooltipBackground};
        box-shadow: ${tooltipShadow};
        color: ${tooltipColor};
        text-align: left;
        white-space: nowrap;
      }
    `}
  />
);

PlotStyle.defaultProps = {
  axisFontColor: '#6b6b76',
  axisLineColor: '#e6e6e9',
  axisFontSize: '11px',
  tooltipBackground: '#3a3a48',
  tooltipColor: '#fff',
  tooltipFontSize: '12px',
  tooltipBorderRadius: '4px',
  tooltipShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
  tooltipPadding: '7px 10px'
};

export default PlotStyle;
