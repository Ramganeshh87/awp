import React, { useState } from "react";
function DateTime() {
  const [dateTime, setDateTime] = useState("");
  const [message, setMessage] = useState("");

  const handleShowDateTime = () => {
    const now = new Date();
    setDateTime(now.toLocaleString());
  };

  const handleShowMessage = () => {
    setMessage("Button 2 was clicked!");
  };
  return (
    <div>
      <button onClick={handleShowDateTime}>Show Date & Time</button>
      <button onClick={handleShowMessage}>Show Message</button>
      <div>
        {dateTime && <p>Current Date & Time: {dateTime}</p>}
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default DateTime;
