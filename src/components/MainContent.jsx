import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Cards from "./Cards";
import { ReactComponent as AddIcon } from "../icons/add.svg";
import { ReactComponent as CalendarIcon } from "../icons/calendar.svg";
import { ReactComponent as UsersIcon } from "../icons/users.svg";
import { ReactComponent as FourDotsIcon } from "../icons/4dots.svg";
import { ReactComponent as EditIcon } from "../icons/edit.svg";
import { ReactComponent as FilterIcon } from "../icons/filter.svg";
import { ReactComponent as LinkIcon } from "../icons/link.svg";
import { ReactComponent as DropdownIcon } from "../icons/dropdown.svg";

const MainContent = () => {
  const cards = [
    {
      priority: "Low",
      title: "Brainstorming",
      text: "Brainstorming brings team members' diverse experience into play.",
      comments: "10",
      files: "1",
    },
    {
      priority: "Medium",
      title: "Task Management",
      text: "Effective task management ensures timely completion of projects.",
      comments: "5",
      files: "3",
    },
    {
      priority: "High",
      title: "Project Planning",
      text: "Careful project planning sets the foundation for successful execution.",
      comments: "8",
      files: "2",
    },
    {
      priority: "Low",
      title: "Team Collaboration",
      text: "Collaboration among team members fosters innovation and productivity.",
      comments: "3",
      files: "2",
    },
    {
      priority: "Medium",
      title: "Data Analysis",
      text: "Thorough data analysis provides valuable insights for decision-making.",
      comments: "7",
      files: "1",
    },
    {
      priority: "High",
      title: "Problem Solving",
      text: "Effective problem-solving skills lead to efficient solutions.",
      comments: "4",
      files: "0",
    },
    {
      priority: "Medium",
      title: "Time Management",
      text: "Efficient time management ensures optimal use of available resources.",
      comments: "2",
      files: "1",
    },
    {
      priority: "Low",
      title: "Communication Skills",
      text: "Strong communication skills promote effective collaboration.",
      comments: "6",
      files: "0",
    },
    {
      priority: "High",
      title: "Leadership Development",
      text: "Developing leadership skills empowers individuals and teams.",
      comments: "9",
      files: "3",
    },
  ];

  const [todoCards, setTodoCards] = useState([0, 1, 2, 3]);
  const [onProgressCards, setOnProgressCards] = useState([4, 5, 6]);
  const [doneCards, setDoneCards] = useState([7, 8]);

  const setColumnCards = (column, newCardIndexes) => {
    if (column === "To Do") {
      setTodoCards(newCardIndexes);
    } else if (column === "On Progress") {
      setOnProgressCards(newCardIndexes);
    } else {
      // column === 'Done'
      setDoneCards(newCardIndexes);
    }
  };

  const getColumnCards = (column) => {
    if (column === "To Do") {
      return todoCards;
    } else if (column === "On Progress") {
      return onProgressCards;
    } else {
      // column === 'Done'
      return doneCards;
    }
  };

  const onDragEnd = ({ source, destination }) => {
    // Make sure we have a valid destination
    if (destination === undefined || destination === null) return null;

    // Make sure we're actually moving the item
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null;

    // Set start and end variables
    const start = getColumnCards(source.droppableId);
    const end = getColumnCards(destination.droppableId);

    // If start is the same as end, we're in the same column
    if (start === end) {
      // Move the item within the list
      // Start by making a new list without the dragged item
      const newList = start.filter((_, idx) => idx !== source.index);

      // Then insert the item at the right location
      newList.splice(destination.index, 0, start[source.index]);

      // Update the state
      setColumnCards(source.droppableId, newList);

      return null;
    } else {
      // If start is different from end, we need to update multiple columns
      // Filter the start list like before
      const newStartList = start.filter((_, idx) => idx !== source.index);

      // Make a new end list array
      const newEndList = end;

      // Insert the item into the end list
      newEndList.splice(destination.index, 0, start[source.index]);

      // Update the state

      setColumnCards(source.droppableId, newStartList);
      setColumnCards(destination.droppableId, newEndList);

      return null;
    }
  };

  const CardsContainer = () => {
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="cards-container flex-row-center">
          <Cards name="To Do" cardIndexes={todoCards} cards={cards} />
          <Cards
            name="On Progress"
            cardIndexes={onProgressCards}
            cards={cards}
          />
          <Cards name="Done" cardIndexes={doneCards} cards={cards} />
        </div>
      </DragDropContext>
    );
  };

  return (
    <div className="main-content">
      <div className="main-content-header flex-row-between">
        <div className="main-content-header-left flex-row">
          <p className="text-sz-largest text-primary text-fw-500">Mobile App</p>
          <EditIcon className="icon icon-highlight" />
          <LinkIcon className="icon icon-highlight" />
        </div>
        <div className="main-content-header-right flex-row">
          <AddIcon className="icon icon-highlight" />
          <p className="text-fw-500">Invite</p>
          <div className="circle-container">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
            <div className="circle circle-4"></div>
            <div className="circle circle-5">
              <p>+2</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-row-between">
        <div className="flex-row">
          <div className="dropdown flex-row-center">
            <FilterIcon className="icon" />
            <p>Filter</p>
            <DropdownIcon className="icon" />
          </div>
          <div className="dropdown flex-row-center">
            <CalendarIcon className="icon" />
            <p>Today</p>
            <DropdownIcon className="icon" />
          </div>
        </div>

        <div className="flex-row">
          <div className="dropdown flex-row-center">
            <UsersIcon className="icon" />
            <p>Share</p>
          </div>
          <FourDotsIcon className="icon" />
        </div>
      </div>
      <CardsContainer />
    </div>
  );
};

export default MainContent;
