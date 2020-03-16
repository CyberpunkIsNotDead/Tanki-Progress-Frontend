import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { IndexPage } from './pages/IndexPage';
import { WallPage } from './pages/WallPage';
import { SummaryPage } from './pages/SummaryPage';
import { MonitoringPage } from './pages/MonitoringPage';
import { LogsPage } from './pages/LogsPage';
import { Navbar } from './components/Navbar';
import { SearchField } from './components/SearchField';

function App() {
  return (
    <BrowserRouter>
      <header>
        <SearchField />
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route exact path={'/'} component={IndexPage} />
          <Route path={'/wall'} component={WallPage} />
          <Route path={'/summary'} component={SummaryPage} />
          <Route path={'/monitoring'} component={MonitoringPage} />
          <Route path={'/logs'} component={LogsPage} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
