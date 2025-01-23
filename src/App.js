import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import ChatFeed from "./components/ChatFeed.jsx";

function App() {
  return (
    <>
      {/* create routes */}
      {/* one for home and one for dynamic routes */}
      <ChatFeed />
    </>
  );
}

export default App;
