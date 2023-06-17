import React from "react";
import { ReactComponent as DotHorizontalIcon } from "../icons/dot-horz.svg";
import { ReactComponent as MessageIcon } from "../icons/message.svg";
import { ReactComponent as FilesIcon } from "../icons/files.svg";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Card = ({ cards, cardIndex, index }) => {
  const card = cards[cardIndex];
  return (
    <Draggable draggableId={"card-" + cardIndex} index={index}>
      {(provided) => (
        <div
          className={`card card-${cardIndex}`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="card-header flex-row-between">
            <div className="priority-div">
              <p>{card.priority}</p>
            </div>
            <DotHorizontalIcon className="icon" />
          </div>
          <p className="text-primary text-sz-large text-fw-600">{card.title}</p>
          <div className="card-text">
            <p>{card.text}</p>
          </div>
          <div className="card-footer flex-row-between">
            <div
              className={`circle circle-${Math.floor(Math.random() * 5) + 1}`}
            ></div>
            <div className="flex-row-center">
              <div className="flex-row">
                <MessageIcon className="icon" />
                <p>{card.comments} comments</p>
              </div>
              <div className="flex-row">
                <FilesIcon className="icon" />
                <p>{card.files} files</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
