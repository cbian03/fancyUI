/*
 * @Author: Chengxu Bian
 * @Date: 2020-07-16 10:39:16
 * @Last Modified by: Chengxu Bian
 * @Last Modified time: 2020-07-18 20:31:56
 */
import React from "react";
import { storiesOf } from "@storybook/react";
import Progress from "./progress";
const defaultProgress= () => {

  return (
    <div>
      <Progress percent={60} theme="primary" />
      <br />
      <Progress percent={60} theme="primary" showText />
    </div>
  );
};
const themeProgress = () => (
  <div>
    <Progress percent={80} theme="primary" showText />
    <br />
    <Progress percent={60} theme="danger" showText />
    <br />
    <Progress percent={50} theme="info" showText />
    <br />
    <Progress percent={40} theme="secondary" showText />
    <br />
    <Progress percent={30} theme="success" showText />
    <br />
    <Progress percent={20} theme="warning" showText />
  </div>
);

storiesOf("Progress", module)
  .add("default", defaultProgress)
  .add("theme progress", themeProgress);
