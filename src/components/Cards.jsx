import React from "react";
import Card from "./Card";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Cards = ({ cards, name, cardIndexes }) => {
  cardIndexes.map((c) => console.log(c));
  return (
    <Droppable droppableId={name}>
      {(provided) => (
        <div className="cards">
          <div
            className={`cards-header ${
              name === "To Do" ? "flex-row-between" : "flex-row"
            }`}
          >
            <div className="flex-row">
              <div className="dot"></div>
              <p className="text-primary text-fw-500">{name}</p>
              <div className="number-div">
                <p>{cardIndexes.length}</p>
              </div>
            </div>
          </div>
          <div
            className="cards-body"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {cardIndexes.map((c, ind) => (
              <Card cardIndex={c} key={c} index={ind} cards={cards} />
            ))}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default Cards;
