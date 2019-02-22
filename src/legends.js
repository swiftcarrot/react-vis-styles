import React from 'react';
import { css, Global } from '@emotion/core';

const LegendsStyle = ({ enabledColor, disabledColor }) => (
  <Global
    styles={css`
      .rv-discrete-color-legend {
        box-sizing: border-box;
        overflow-y: auto;
        font-size: 12px;

        &.horizontal {
          white-space: nowrap;
        }
      }

      .rv-discrete-color-legend-item {
        color: ${enabledColor};
        border-radius: 1px;
        padding: 9px 10px;

        &.horizontal {
          display: inline-block;

          .rv-discrete-color-legend-item__title {
            margin-left: 0;
            display: block;
          }
        }
      }

      .rv-discrete-color-legend-item__color {
        display: inline-block;
        vertical-align: middle;
        overflow: visible;
      }

      .rv-discrete-color-legend-item__color__path {
        stroke: #dcdcdc;
        stroke-width: 2px;
      }

      .rv-discrete-color-legend-item__title {
        margin-left: 10px;
      }

      .rv-discrete-color-legend-item.disabled {
        color: ${disabledColor};
      }

      .rv-discrete-color-legend-item.clickable {
        cursor: pointer;

        &:hover {
          background: #f9f9f9;
        }
      }

      .rv-search-wrapper {
        display: flex;
        flex-direction: column;
      }

      .rv-search-wrapper__form {
        flex: 0;
      }

      .rv-search-wrapper__form__input {
        width: 100%;
        color: #a6a6a5;
        border: 1px solid #e5e5e4;
        padding: 7px 10px;
        font-size: 12px;
        box-sizing: border-box;
        border-radius: 2px;
        margin: 0 0 9px;
        outline: 0;
      }

      .rv-search-wrapper__contents {
        flex: 1;
        overflow: auto;
      }

      .rv-continuous-color-legend {
        font-size: 12px;

        .rv-gradient {
          height: 4px;
          border-radius: 2px;
          margin-bottom: 5px;
        }
      }

      .rv-continuous-size-legend {
        font-size: 12px;

        .rv-bubbles {
          text-align: justify;
          overflow: hidden;
          margin-bottom: 5px;
          width: 100%;
        }

        .rv-bubble {
          background: #d8d9dc;
          display: inline-block;
          vertical-align: bottom;
        }

        .rv-spacer {
          display: inline-block;
          font-size: 0;
          line-height: 0;
          width: 100%;
        }
      }

      .rv-legend-titles {
        height: 16px;
        position: relative;
      }

      .rv-legend-titles__left,
      .rv-legend-titles__right,
      .rv-legend-titles__center {
        position: absolute;
        white-space: nowrap;
        overflow: hidden;
      }

      .rv-legend-titles__center {
        display: block;
        text-align: center;
        width: 100%;
      }

      .rv-legend-titles__right {
        right: 0;
      }
    `}
  />
);

LegendsStyle.defaultProps = {
  enabledColor: '#3a3a48',
  disabledColor: '#b8b8b8'
};

export default LegendsStyle;
