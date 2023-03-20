
var App = require('./components/app');
var Itinerary = require('./components/Itinerary');
var Login = require('./components/login');

module.exports = (
    <Router>
          <Routes>
              <Route exact path="/" component={<App/>}/>
              <Route path="login" component={<Login/>}></Route>
              <Route path='itinerary' component={<Date />} />
          </Routes>
    </Router>
);