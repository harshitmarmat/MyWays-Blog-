import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Layout/Header";
import EditBlogPage from "./pages/EditBlogPage";
import HomePage from "./pages/HomePage";
import NewBlogPage from "./pages/NewBlogPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const user = useSelector(state=>state);
  console.log(user.isLoggedIn);
  console.log(user.token);
  return (
    <div>
      <Header/>
    <Switch>
      <Route path='/' exact >
        <HomePage/>
      </Route>
      {user.isLoggedIn && <Route path='/profile' >
        <ProfilePage />
      </Route>}
      {user.isLoggedIn && <Route path='/new-blog-form'>
        <NewBlogPage/>
      </Route>}
      {user.isLoggedIn && <Route path='/edit-blog'>
        <EditBlogPage/>
      </Route>}
      <Route  path='*'>
        <Redirect to='/' />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
