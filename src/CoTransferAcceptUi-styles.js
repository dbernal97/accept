/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`:host {
  display: block;
  box-sizing: border-box;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.main-container {
  height: 1400px;
  width: 100%;
  background-color: #388D4F;
  padding: 5px;
  color: #fff;
}
.main-container .transfer-panel {
  margin-top: 20px;
}
.main-container .transfer-panel #strong-text {
  font-weight: bold;
}
.main-container .transfer-panel #tituloUno {
  font-size: 40px;
  font-weight: 500;
}
.main-container .transfer-panel p {
  margin-top: 5px;
}
.main-container .transfer-panel #print-link {
  color: #fff;
  margin: 15px 0;
}
.main-container .transfer-panel #continue-btn {
  margin: 5px 0;
}
.main-container .operation-panel {
  padding: 3px;
  margin-top: 50px;
  width: 100%;
  background-color: #fff;
  color: #000;
  height: 650px;
  box-shadow: 0 0.5px 3px 0.2px #c5c5c5;
}
.main-container .operation-panel img {
  width: 40%;
  margin-left: 30%;
}
.main-container .operation-panel #operation-title {
  color: #121212;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 24px;
  text-align: center;
}
.main-container .operation-panel #operation-value {
  color: #121212;
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 24px;
  text-align: center;
}
.main-container .operation-panel #operation-date {
  color: #121212;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 24px;
  text-align: center;
}
.main-container .operation-panel .table-transfer {
  padding: 20px 5px 5px 0;
  width: 100%;
}
.main-container .operation-panel .table-transfer tr td {
  width: 40%;
  text-align: right;
}
.main-container .operation-panel .table-transfer tr td:first-child {
  width: 60%;
  text-align: left;
}

@media screen and (min-width: 700px) {
  .main-container {
    height: 900px;
    display: flex;
  }
  .main-container .transfer-panel {
    width: 45%;
    margin-left: 10%;
    padding: 10px;
  }
  .main-container .operation-panel {
    width: 35%;
    margin-left: 30px;
  }
}
`;