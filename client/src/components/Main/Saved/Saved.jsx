import React from "react";
import Card from './Card';

const Saved = ({ savedList }) => {

  
  return (

    <section id="saved-section">
      <h5>saved</h5>
    <article id="savedList">
      {savedList && savedList.length > 0 ? (savedList.map((saved, index) =>(
        <Card key={index} saved={saved} />
      ))
      ) : (
        <p>No saved elements.</p>
      )}
    </article>
    </section>
  );
};

export default Saved;
