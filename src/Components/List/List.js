import React from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import classes from "./List.module.css";

const List = (props) => {
  const deleteHandler = (event) => {
    console.log(event.target);
    props.ondelete(event.target.id);
  };

  return (
    <Card className={classes.outer}>
      <h1>{props.category}</h1>
      {props.listItems.map((item) => {
        return (
          <li
            id={item.id}
            onClick={deleteHandler}
            className={classes.list}
            key={Math.random()}
          >
            {item.pn}-{item.sp}-{item.cat}
            {/* <Button>Delete</Button> */}
          </li>
        );
      })}
    </Card>
  );
};
export default List;
