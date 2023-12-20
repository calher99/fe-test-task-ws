import React, { useEffect } from "react";
import { initSocket } from "./components/Socket";

const App: React.FC = () => {
  useEffect(() => {
    const socket = initSocket();

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <h1>Socket.io React App</h1>
    </div>
  );
};

export default App;
