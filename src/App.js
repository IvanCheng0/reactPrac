import React from 'react';
import { IconStyle } from './assets/iconfont/iconfont';
import { GlobalStyle } from './style';
import { renderRoutes } from 'react-router-config';
import routes from './routes/index.js';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';

function App() {
  return (
    // <div className="App">
    //   <GlobalStyle></GlobalStyle>
    //   <IconStyle></IconStyle>
    //   <i className="iconfont">&#xe62b;</i>
    // </div>
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        { renderRoutes (routes) }
    </HashRouter>
    </Provider>
    
  );
}

export default App;
