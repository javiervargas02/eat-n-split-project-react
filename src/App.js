import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";
import { useState } from "react";

export default function App() {
  const [isOpenAddFriend, setIsOpenAddFriend] = useState(false);
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {isOpenAddFriend && <FormAddFriend />}
        {/* Learned that I cannot use onClick on a custom component, but instead, I have to pass it as a prop to the component and the use it on the html */}
        <Button onClick={() => setIsOpenAddFriend((open) => !open)}>
          {isOpenAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}
