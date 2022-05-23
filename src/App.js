import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Embedded dashboard demo below.
        </p>
        {/* Dashboard URL: */}
        {/* https://localhost:8443/app/team/4/dashboard */}
        {/* Embedded Dashboard URL : */}
        {/* https://localhost:8443/app/team/4/dashboard?isEmbedded=true */}
        {/* App URL: */}
        {/* https://localhost:8443 */}
        {/* Login URL: */}
        {/* https://localhost:8443/login */}
        {/* Deployed URL: */} 
        {/* https://dev-9375-embed-dashboard-in-iframe.checkbox.ninja */}
        {/* Deployed Dashboard URL: */} 
        {/* https://dev-9375-embed-dashboard-in-iframe.checkbox.ninja/app/team/2/dashboard */}
        {/* Embedded Deployed Dashboard URL: */} 
        {/* https://dev-9375-embed-dashboard-in-iframe.checkbox.ninja/app/team/2/dashboard?isEmbedded=true */}
        <iframe loading="lazy" width="1140" height="541.25" src="https://dev-9375-embed-dashboard-in-iframe.checkbox.ninja/app/team/2/dashboard?isEmbedded=true" frameborder="0" allowfullscreen="true"></iframe>
      </header>
    </div>
  );
}

export default App;
