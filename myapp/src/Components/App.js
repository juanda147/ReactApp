import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {

  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term
      },
      headers: {
        Authorization: 'Client-ID fbd7a0f44ffec3e172ff9db53f568d93780340e539b08cea3296c2588baf09c9'
      }
    });
  }

  render() {
    return (
      <div className="ui cointainer">
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  };
}


export default App;
