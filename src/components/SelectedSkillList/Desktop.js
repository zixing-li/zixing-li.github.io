import React from 'react';
import { useSelector } from 'react-redux';

export default function SelectedSkillList() {
  const darkMode = useSelector(state => state.darkMode.mode);
  const grid = useSelector(state => state.grid);

  const renderList = () => {
    const { selectedCellsById } = grid;
    let skillList = Object.keys(selectedCellsById)
      .map(cellId => {
        return selectedCellsById[cellId].name;
      })
      .sort();

    return skillList.map((item, index) => {
      return (
        <li
          className={`active-grid list-group-item ${
            darkMode ? 'bg-dark' : null
          }`}
          key={index}
        >
          {item}
        </li>
      );
    });
  };
  return (
    <div className="active-grid-list">
      <div className={`card mt-5 ${darkMode ? 'text-white bg-dark' : null}`}>
        <div className="card-body">
          <h5 className="card-title">
            Remaining Energy: {grid.remainingEnergy}
            <p>Orbs Spent: {grid.orbSpent}</p>
          </h5>
          <ul className="list-group list-group-flush"> {renderList()}</ul>
        </div>
      </div>
    </div>
  );
}
