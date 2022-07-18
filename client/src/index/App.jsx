import {connect} from 'react-redux';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Test</h1>
    </div>
  );
}

export default connect(
  function mapStateToProps(state) {},
  function mapDispatchToProps(dispatch) {}
)(App);
