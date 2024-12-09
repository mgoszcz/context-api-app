import "./App.css";
import UserInfoContext from "./context/UserInfoContext";
import BlogPage from "./components/BlogPage";
import { ThemeProvider } from "./context/ThemeProvider";
import ContentComponent from "./components/ContentComponent";

function App() {
  const userInfo = { username: "Admin", isAdmin: true };

  return (
    <div>
      <UserInfoContext.Provider value={userInfo}>
        <BlogPage />
      </UserInfoContext.Provider>
      <ThemeProvider>
        <ContentComponent />
        <ContentComponent />
      </ThemeProvider>
    </div>
  );
}

export default App;
