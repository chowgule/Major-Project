import "./App.css";
import MainContainer from "./MainContainer/MainContainer";
import Navbar from "./Navbar/Navbar";
import TextField from "./Input/TextField";
import { PostsProvider } from "./providers/PostsProvider";

function App() {
  return (
    <PostsProvider>
      <Navbar />
      <TextField />
      <MainContainer />
    </PostsProvider>
  );
}

export default App;

// * prvious code

// import "./App.css";
// import MainContainer from "./MainContainer/MainContainer";
// import Navbar from "./Navbar/Navbar";
// import TextField from "./Input/TextField";
// import PostsContext from "./providers/PostsProvider"; // Import the provider
// import { useState } from "react";

// function App() {
//   const [products, setPosts] = useState([]);
//   return (
//     <PostsContext.Provider value={{ products, setPosts }}>
//       <Navbar />
//       <TextField />
//       <MainContainer />
//     </PostsContext.Provider>
//   );
// }

// export default App;
