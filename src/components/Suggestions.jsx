import React from 'react';
import '../styles/Suggestions.css';

function Suggestions() {
  const suggestions = [
    { name: 'Prince Sikotra', followedBy: 'princess' },
    { name: 'abhishek_bhoi', followedBy: 'ur gf' },
    { name: 'Nilesh Prajapati', followedBy: 'abhishek' },
    { name: 'Millind Parekh', followedBy: 'abhi and ravi' },
    { name: 'Deep Kumar', followedBy: 'ravi and priyanshu' },
    { name: 'Haider Mirza', followedBy: 'his maqsad with 69 others' },
  ];

  return (
    <div className="suggestions">
      <h2>Suggestions</h2>
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>
            <img src={`avatar${index + 1}.jpg`} alt={suggestion.name} />
            <div>
              <h3>{suggestion.name}</h3>
              <p>Followed by {suggestion.followedBy}</p>
            </div>
            <button className="follow-btn">Follow</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Suggestions;