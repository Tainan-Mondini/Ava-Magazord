import React from 'react';

function ListItem({ videoTitle, watched, onWatch }) {
  const circleClass = watched ? 'bg-green-400' : 'bg-gray-300';
  const lineClass = watched ? 'bg-green-400' : 'bg-gray-300';

  return (
    <li className="relative pl-10 mt-4 cursor-pointer" onClick={onWatch}>
      <div className={`absolute left-3 w-5 h-5 rounded-full ${circleClass} mt-2.5`}></div>
      <div className={`absolute top-0 left-5 w-1 h-full ${lineClass}`}></div>
      <span className="text-gray-700 font-medium">{videoTitle}</span>
    </li>
  );
}

export default ListItem;
