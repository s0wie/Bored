import React, { useState } from "react";
import Button from "../Button";
import "./suggestion.css";

const Suggestion = () => {
  const [activity, setActivity] = useState(null);
  const [type, setType] = useState("");
  const [participants, setParticipants] = useState(0);

  const getSuggestion = async () => {
    const response = await fetch("https://www.boredapi.com/api/activity");
    const data = await response.json();
    setActivity(data.activity);
    setType(data.type);
    setParticipants(data.participants);
    // var typeText = document.querySelector(".type");
    // typeText.innerHTML = "Type: " + type;
    // var participantsText = document.querySelector(".participants");
    // participantsText.innerHTML = "Participants: " + participants;
    // var showCard = document.querySelector(".card");
    // showCard.classList.add("show");
  };

  const getSingleSuggestion = async () => {
    const response = await fetch(
      "https://www.boredapi.com/api/activity?participants=1"
    );
    const data = await response.json();
    setActivity(data.activity);
    setType(data.type);
    setParticipants(data.participants);
    // var typeText = document.querySelector(".type");
    // typeText.innerHTML = "Type: " + type;
    // var participantsText = document.querySelector(".participants");
    // participantsText.innerHTML = "Participants: " + participants;
    // var showCard = document.querySelector(".card");
    // showCard.classList.add("show");
  };

  const getGroupSuggestion = async () => {
    let randomInt = Math.floor(Math.random() * 8) + 2;
    if (randomInt == 6 || randomInt == 7 || randomInt == 9) {
      randomInt = Math.floor(Math.random() * 3) + 2;
    }
    console.log(randomInt);
    const response = await fetch(
      "https://www.boredapi.com/api/activity?participants=" + randomInt
    );
    const data = await response.json();
    setActivity(data.activity);
    setType(data.type);
    setParticipants(data.participants);
    console.log(data);
    // var typeText = document.querySelector(".type");
    // typeText.innerHTML = "Type: " + type;
    // var participantsText = document.querySelector(".participants");
    // participantsText.innerHTML = "Participants: " + participants;
    // var showCard = document.querySelector(".card");
    // showCard.classList.add("show");
  };

  const google = `https://letmegooglethat.com/?q=${activity}`;

  return (
    <div>
      <div className="buttonContainer">
        <Button buttonText="Random" handleClick={() => getSuggestion()} />
        <Button buttonText="Single" handleClick={() => getSingleSuggestion()} />
        <Button buttonText="Group" handleClick={() => getGroupSuggestion()} />
      </div>
      <div className="cardContainer">
        {activity && (
          <div className="card">
            <a href={google}>
              <h1>{activity}</h1>
            </a>
            <p class="type">Type: {type}</p>
            <p class="participants">Participants: {participants}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Suggestion;
