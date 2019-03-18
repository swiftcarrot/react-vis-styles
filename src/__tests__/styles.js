/**
 * @jest-environment node
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { TreemapStyle } from "../";

test("TreemapStyle", () => {
  expect(renderToString(<TreemapStyle />)).toMatchInlineSnapshot(
    `"<style data-emotion-css=\\"bku8ja-TreemapStyle\\">.rv-treemap{font-size:12px;position:relative;}.rv-treemap__leaf{overflow:hidden;position:absolute;}.rv-treemap__leaf--circle{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.rv-treemap__leaf__content{overflow:hidden;padding:10px;text-overflow:ellipsis;}</style>"`
  );
});
