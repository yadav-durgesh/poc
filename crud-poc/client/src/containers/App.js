import React from 'react';
import { Switch, Route, Redirect, HashRouter, Router } from 'react-router-dom';
import { Header, Sidebar, Footer, Content } from '../components/layout';
import { createBrowserHistory } from 'history';
import staticTable from './staticTable';
import dynamicTable from './dynamicTable';
import dashboard from './dashboard';
import home from './home';
import '../assets/css/reduction.css';

class App extends React.Component {
  static isSidebarOpen() {
    return document
      .querySelector('.cr-sidebar')
      .classList.contains('cr-sidebar--open');
  }

  componentDidMount() {
    this.openSidebar('open');
  }

  componentWillReceiveProps({ breakpoint }) {
    if (breakpoint !== this.props.breakpoint) {
      this.checkBreakpoint(breakpoint);
    }
  }

  // close sidebar when
  handleContentClick = event => {
    // close sidebar if sidebar is open and screen size is less than `md`
    console.log('called',App.isSidebarOpen());
    if (
      App.isSidebarOpen()) {
      this.openSidebar('close');
    }else{
      this.openSidebar('open');
    }
  };

  checkBreakpoint(breakpoint) {
    switch (breakpoint) {
      case 'xs':
      case 'sm':
      case 'md':
        return this.openSidebar('close');

      case 'lg':
      case 'xl':
      default:
        return this.openSidebar('open');
    }
  }

  openSidebar(openOrClose) {
    if (openOrClose === 'open') {
      return document
        .querySelector('.cr-sidebar')
        .classList.add('cr-sidebar--open');
    }

    document.querySelector('.cr-sidebar').classList.remove('cr-sidebar--open');
  }

  render() {
    return (
      <div className="jumbotron">
        <div className="CommonPage">
          <div >
            {alert.message &&
              <div className={`alert ${alert.type}`}>{alert.message}</div>
            }
            <Router history={createBrowserHistory()}>
              <div>
                {/* <HashRouter> */}
                  <Sidebar />
                  <Content fluid >
                  <Header handleSidebar={this.handleContentClick}/>
                  <Switch>
                    <Route exact  path="/" component={home} />
                    <Route exact  path="/dashboard" component={dashboard} />
                    <Route exact  path="/static" component={staticTable} />
                    <Route exact  path="/dynamic" component={dynamicTable} />
                  </Switch>
                  <Footer />
                  </Content>
                {/* </HashRouter> */}
                </div>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default App;