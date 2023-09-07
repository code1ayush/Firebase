import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue } from "firebase/database";
import { Link } from "react-router-dom";
// import "./App.css";
function Begin() {
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  const firebaseConfig = {
    apiKey: "AIzaSyB0pJMZ5BOqHKM9V6jswqqawwga4OQPV28",
    authDomain: "fir-dc608.firebaseapp.com",
    databaseURL: "https://fir-dc608-default-rtdb.firebaseio.com",
    projectId: "fir-dc608",
    storageBucket: "fir-dc608.appspot.com",
    messagingSenderId: "362096921282",
    appId: "1:362096921282:web:4fe7d6cbd889f3c226895b",
  };
  const app = initializeApp(firebaseConfig);
  const dataBase = getDatabase(app);
  const todoInDb = ref(dataBase, "toDOlIST");
  const movies = ref(dataBase, "movies");
  const handleClick = () => {
    // console.log(message);
    push(todoInDb, message);
    delmessage();
  };
  const delmessage = () => {
    setMessage("");
  };
  useEffect(() => {
    retrieve();
  }, []);
  const retrieve = () => {
    onValue(todoInDb, (snapshot) => {
      let arrayList = [];
      if (snapshot.val()) {
        arrayList = Object.values(snapshot.val());
      }
      console.log(arrayList);
      setData(arrayList);
    });
  };
  return (
    <div className="Appp">
      <main className="Begin">
        <input
          type="text"
          onChange={handleChange}
          className="input"
          value={message}
          placeholder="input daily tasks"
        />
        <div className="btn">
          <button onClick={handleClick}>Add</button>
          <button onClick={retrieve}>reterireve</button>
        </div>
      </main>
      {data ? (
        <div>
          {data.map((employee) => {
            return (
              <div>
                <h2>{employee}</h2>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
      <Link to="/image">Upload Image</Link>
    </div>
  );
}

export default Begin;
