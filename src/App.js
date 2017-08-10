import React, { Component } from 'react';

import './App.css';

import request from 'superagent';
import DataTable from './DataTable';

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      items: [],
      visibleItemCount: 5
    };

    this.processResponse = this.processResponse.bind(this);


  }

  componentDidMount() {

    // bring in the JSON
    request
      .get(`${process.env.PUBLIC_URL}/company.json`)
      .end(this.processResponse);

  }

  processResponse(err, res) {

    if (err) {

      console.error('ERROR fetching data');

    } else {

      console.log('SUCCESS ++++++++');

      this.setState({
        items: JSON.parse(res.text)
      });

    }

  }

  getItems() {

    return this.state.items.slice(0, this.state.visibleItemCount);

  }

  render() {

    return (
      <div className="App">

        <form className="search">

          <input className="search__input"  type="text" />


        </form>

        <DataTable data={this.getItems()} />

      </div>
    );
  }
}

export default App;
