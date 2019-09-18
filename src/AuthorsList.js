import React from "react";
import SearchBar from "./SearchBar";
// Components
import AuthorCard from "./AuthorCard";

function AuthorsList(props) {
  const authorCards = props.authors.map(author => (
    <AuthorCard
      key={author.first_name + author.last_name}
      author={author}
      auth={props.author}
    />
  ));

  return (
    <div className="authors">
      <SearchBar filter={props.filter} />
      <h3>Authors</h3>
      <div className="row">{authorCards}</div>
    </div>
  );
}

export default AuthorsList;
