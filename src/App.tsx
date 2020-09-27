import { FooterComponent } from 'components/Footer';
import { HeaderComponent } from 'components/Header';
import { LoaderComponent } from 'components/Loader/Loader';
import React, { FunctionComponent, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const HomeComponent = lazy(() => import('./domain/Home'));

const App: FunctionComponent = () => {
  return (
    <Router>
      <div className="container mx-auto bg-white flex flex-col justify-between font-body h-screen overflow-scroll text-primary1">
        <div className="flex flex-col justify-start">
          <HeaderComponent />
          <Suspense fallback={<LoaderComponent />}>
            <Switch>
              <Route exact path="/" component={HomeComponent} />
              <Route path="/portfolio">Portfolio</Route>
              <Route path="/contact">Contact Me</Route>
            </Switch>
          </Suspense>
        </div>
        <FooterComponent />
      </div>
    </Router>
  );
};

export default App;
