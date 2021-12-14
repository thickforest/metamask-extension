import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  setUseTokenDetection,
  setUseCollectibleDetection,
  setOpenSeaEnabled,
  setTheme,
} from '../../../store/actions';
import {
  getUseTokenDetection,
  getUseCollectibleDetection,
  getOpenSeaEnabled,
  getTheme,
} from '../../../selectors';
import ExperimentalTab from './experimental-tab.component';

const mapStateToProps = (state) => {
  return {
    useTokenDetection: getUseTokenDetection(state),
    useCollectibleDetection: getUseCollectibleDetection(state),
    openSeaEnabled: getOpenSeaEnabled(state),
    theme: getTheme(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUseTokenDetection: (val) => dispatch(setUseTokenDetection(val)),
    setUseCollectibleDetection: (val) =>
      dispatch(setUseCollectibleDetection(val)),
    setOpenSeaEnabled: (val) => dispatch(setOpenSeaEnabled(val)),
    setTheme: (val) => dispatch(setTheme(val)),
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(ExperimentalTab);
