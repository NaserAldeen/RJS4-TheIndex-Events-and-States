import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {
  state = {
    currentAuthor: null,
    authors: authors,
    filteredAuthors: authors
  };
  selectAuthor = author => {
    this.setState({ currentAuthor: author });
  };
  filterAuthors = query => {
    let filtered = this.state.authors.filter(auth => {
      if (
        (
          auth.first_name.toLowerCase() +
          " " +
          auth.last_name.toLowerCase()
        ).includes(query.toLowerCase())
      )
        return true;
      return false;
    });
    this.setState({
      filteredAuthors: filtered
    });
  };
  currentPage = () => {
    if (this.state.currentAuthor) {
      return <AuthorDetail author={this.state.currentAuthor} />;
    } else {
      return (
        <AuthorsList
          authors={this.state.filteredAuthors}
          author={this.selectAuthor}
          filter={this.filterAuthors}
        />
      );
    }
  };
  goBack = () => {
    this.setState({ currentAuthor: null, filteredAuthors: authors });
  };

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar back={this.goBack} />
          </div>
          <div className="content col-10">{this.currentPage()}</div>
        </div>
      </div>
    );
  }
}

export default App;
