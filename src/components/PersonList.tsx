import React from "react";
import { Name } from "./Person.types";
type PersonListProps = {
  names: Name[];
};
function PersonList(props: PersonListProps) {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <div key={name.first}>
            <h2>{name.first}</h2>
            <h2>{name.last}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default PersonList;
