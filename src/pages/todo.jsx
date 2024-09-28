import { useState } from "react";

function Todo() {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState(["HERE'S YOUR TODO"]);

  const addUser = () => {
    setUsers([...users, username]);
    setUsername("");
  };

  return (
    <>
    <div className="flex flex-col items-center m-20">
      <h1 className="text-[50px] text-center my-3">
        Hello <span className="underline">{username}</span>{" "}
      </h1>
      <div>
        <input
          value={username}
          placeholder="Your Name"
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2"
          />
        <button className="m-1 rounded-md py-2 px-5 text-white font-bold bg-teal-800 " onClick={addUser}>Add Todo</button>
        <button className="m-1 py-2 px-5 rounded-md text-white font-bold bg-teal-800 " onClick={() => setUsers([])}>Delete</button>
      </div>

      {users.map((data, ind) => (
        <h1
        className="text-center text-white font-medium p-4 rounded-md text-2xl my-2 bg-teal-800"
        key={ind}
        >
          {data}
        </h1>
      ))}
    </div>
   
    <div className="my-5 ">
        <iframe
        className="m-auto rounded-xl shadow-2xl hover:scale-105 transition-all ease-in-out border border-teal-700"
          width={800}
          height={400}
          src="https://www.youtube.com/embed/5xFMEANAOdI?si=I7rqOqPv-DTiQQRQ"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen=""
        />
      </div>
   
      </>
    
  );
}

export default Todo;
