import React from 'react';
import Layout from './components/Layout/Layout'
import SandwichBuilder from './containers/SandwichBuilder/SandwichBuilder';

function App() {
  return (
    
      <div>
      <Layout>
        <SandwichBuilder/>
      </Layout>
      </div>
   
  );
}

export default App;
