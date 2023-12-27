import { useState } from "react";
import Button from "./Button";

export default function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;
    const friendId = crypto.randomUUID();
    const newFriend = {
      name,
      image: `${image}?u=${friendId}`,
      balance: 0,
      id: friendId,
    };
    onAddFriend((previousFriends) => [...previousFriends, newFriend]);
    console.log(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👯‍♂️ Friend name</label>
      <input
        type="text"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />

      <label>📸 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={({ target }) => setImage(target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}
