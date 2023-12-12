import React from "react";
import Friend from "./Friend";

const friends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function FriendsList() {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id}/>
      ))}
    </ul>
  );
}
