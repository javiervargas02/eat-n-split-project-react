import React from "react";
import Button from "./Button";

export default function Friend({ friend, onSelectFriend, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You are even with {friend.name}</p>}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ${friend.balance}
        </p>
      )}
      <Button
        onClick={
          // if a friend is already selected, the function sets the selected friend to null so the form doesn't display
          isSelected ? () => onSelectFriend(null) : () => onSelectFriend(friend)
        }>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
