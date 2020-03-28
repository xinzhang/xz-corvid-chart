import React from 'react';
import Disqus from 'disqus-react';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import StateHeader from './components/Header/StateHeader';
import SampleChart from './components/Charts/SampleChart';
import './styles/App.scss';
import Social from './components/Social';

const disqusShortname = 'www-auscoservices-com-au';
const disqusConfig = {
  url: 'https://www.auscoservices.com.au/',
  identifier: 'www-auscoservices-com-au.disqus.com/',
  title: 'General discussion',
};

function App() {
  return (
    <div className="">
      <Router>
        <StateHeader />
        <Switch>
          <Route path="/:id" children={<Child />} />
        </Switch>
      </Router>
    </div>
  );
}

const Child = () => {
  let { id: state } = useParams();
  return (
    <>
      <Social />
      <section className="section">
        <SampleChart state={state} />
      </section>
      <section>
        <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </section>
    </>
  );
};

export default App;
