import React from "react";

export default function SeeMore({ type }) {
  return (
    <>
      <div className="movie-list-title">
        <span className="title">{type}</span>
        <span className="see-all">See All</span>
      </div>
    </>
  );
}
