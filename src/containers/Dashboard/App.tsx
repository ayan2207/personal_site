import * as React from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";

const styles = require("./App.scss");

import "bootstrap/dist/css/bootstrap.css";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faSpinner, faTags, faFont, faImage, faInfoCircle } from "@fortawesome/fontawesome-free-solid";
import { GetFeed } from "./actions";

interface AppProps {}

interface AppState {}
/**
 * Main app component which renders all child components and
 * holds the state of the application
 * @class App
 * @extends {React.Component<AppProps, AppState>}
 */
class App extends React.Component<AppProps, AppState> {
  state: AppState = {};

  render() {
    return <div id="app-wrapper" className={styles.App} />;
  }
}
/**
 * Maps redux state to the props of this component
 * @param {*} state
 */
function mapStateToProps(state: any) {
  return {};
}

export default connect(
  mapStateToProps,
  { GetFeed }
)(App);
