import { Comments } from "./view/Comments";
import { Route, Routes } from "react-router-dom";
import { Description } from "./view/Description";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Comments />} />
      <Route path="/:postId" element={<Description />} />
    </Routes>
  );
};

export default App;
