import io from "socket.io-client";

// Function to initialize the socket connection and set up the listener
export const initSocket = () => {
  const socket = io("http://localhost:3050");

  socket.on("connect", () => {
    console.log("Connected to the server");
  });

  socket.on("userData", (data: any) => {
    console.log("Incoming data:", data);
  });

  socket.on("disconnect", () => {
    console.log("Disconnected from the server");
  });

  return socket;
};
