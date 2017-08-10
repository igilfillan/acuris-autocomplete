import React, { Component } from 'react';

import './App.css';

import request from 'superagent';
import DataTable from './DataTable';

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      items: [],
      visibleItemCount: 0
    };

    this.processResponse = this.processResponse.bind(this);
    this.showMore = this.showMore.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.resetState = this.resetState.bind(this);
    this.updateSearchString = this.updateSearchString.bind(this);

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

      this.setState({
        items: JSON.parse(res.text)
      });

    }

  }

  getItems() {

    // look up matching items
    let matchingItems = this.state.matchingIndices.map( (item) => {

      return this.state.items[item];

    });

    return matchingItems.slice(0, this.state.visibleItemCount);

  }

  updateSearchString(string){

    this.setState({
      searchValue: string
    });

  }


  showMore() {

    let itemsLength = this.state.items.length;
    let nextVisibleItemCount = this.state.visibleItemCount + 5;

    // cap the max number of visible items at the total number of matching items
    this.setState({
      visibleItemCount: (nextVisibleItemCount > itemsLength) ? itemsLength : nextVisibleItemCount
    });

  }


  updateMatchingItemIndices(string){

    //find index of those that begin with string param and store in state
    let matchingItemsIndices = [];

    this.state.items.forEach( (item, index) => {

      if (item.name.startsWith(string)) {

        matchingItemsIndices.push(index);

      }
    });

    this.setState({
      matchingIndices: matchingItemsIndices,
      visibleItemCount: (matchingItemsIndices.length < 5) ? matchingItemsIndices.length : 5
    });

  }

  resetState(){

    this.setState({
      matchingIndices: [],
      visibleItemCount: 0
    });

  }

  handleChange(event) {

    //store search string
    const string = event.target.value;
    this.updateSearchString(string);

    // find matching items, store matching items in state
    if (string.length > 2) {

      this.resetState();
      this.updateMatchingItemIndices(string);

    } else {

      this.resetState();

    }
  }




  render() {

    return (
      <div className="App">

        <form className="search">

          <input className="search__input" type="text" value={this.state.searchValue} onChange={this.handleChange} />


        </form>



        {this.state.matchingIndices && this.state.matchingIndices.length > 0 && <DataTable data={this.getItems()} />}

        {this.state.visibleItemCount > 0 && this.state.visibleItemCount < this.state.matchingIndices.length && <button className="search__showMore" onClick={this.showMore}>show more</button>}

      </div>
    );
  }
}

export default App;
