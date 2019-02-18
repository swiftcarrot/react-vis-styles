import React from 'react';
import { css, Global } from '@emotion/core';

const TreemapStyle = () => (
  <Global
    styles={css`
      .rv-treemap {
        font-size: 12px;
        position: relative;
      }

      .rv-treemap__leaf {
        overflow: hidden;
        position: absolute;
      }

      .rv-treemap__leaf--circle {
        align-items: center;
        border-radius: 100%;
        display: flex;
        justify-content: center;
      }

      .rv-treemap__leaf__content {
        overflow: hidden;
        padding: 10px;
        text-overflow: ellipsis;
      }
    `}
  />
);

export default TreemapStyle;
