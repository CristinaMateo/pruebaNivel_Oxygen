import React from "react";
import Card from './Card';

const Saved = ({ savedList }) => {
  return (
    <article className="savedList">
      {savedList && savedList.length > 0 ? (savedList.map((saved, index) =>(
        <Card key={index} saved={saved}/>
      ))
      ) : (
        <p>No saved elements.</p>
      )}
    </article>
  );
};

export default Saved;
