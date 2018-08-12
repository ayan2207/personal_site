import * as React from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
const styles = require("./App.scss");
const me = require("../../assets/images/me.jpg");
import "bootstrap/dist/css/bootstrap.css";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt, faBriefcase } from "@fortawesome/fontawesome-free-solid";
import { GetFeed } from "./actions";
import { CSSTransitionGroup } from "react-transition-group";
import { PRIMARY_COLOUR_DARK } from "../../global-constants";

interface AppProps {}

interface AppState {
  darkmode: boolean;
  isAppReady: boolean;
}
/**
 * Main app component which renders all child components and
 * holds the state of the application
 * @class App
 * @extends {React.Component<AppProps, AppState>}
 */
class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    darkmode: false,
    isAppReady: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isAppReady: true });
    }, 1000);
  }

  render() {
    return (
      <div id="app-wrapper" className={styles.App}>
        {this.state.isAppReady ? (
          <div key={2} className={styles.content}>
            <div className={styles.imageWrapper}>
              <img src={me} alt="Ayan Hedayati" />
            </div>
            <div className={styles.titleWrapper}>
              <h1>Ayaan Hedayati</h1>
              <div className={styles.metaWrapper}>
                <p>
                  <FontAwesomeIcon style={{ color: "#8c4019 " }} icon={faBriefcase} /> Software Engineer
                </p>
                <p>
                  <FontAwesomeIcon style={{ color: "#2c76c5" }} icon={faMapMarkerAlt} /> Birmingham
                </p>
              </div>
            </div>
            <small>
              <span>#Web-Development</span> <span>#Designer</span> <span>#Tech-Enthusiast</span>
            </small>
            <div className={styles.social}>
              <div>
                <a href="mailto:ayanhedayati@gmail.com?Subject=Hello!">Email</a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/ayanhedayati/" target="blank">
                  LinkedIn
                </a>
              </div>
              <div>
                <a href="https://twitter.com/ayaanhedayati" target="blank">
                  Twitter
                </a>
              </div>
              <div>
                <a href="https://github.com/ayan2207" target="blank">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
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
