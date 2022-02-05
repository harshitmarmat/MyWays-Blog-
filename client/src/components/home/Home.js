import Blog from "../UI/Blog"
import classes from './Home.module.css'

const Home = () => {
    return (
        <div className={classes.container}>
            <p>MyWays Blogs</p>
            <div className={classes['blogs-container']}>
                <Blog/>
                <Blog/>
                <Blog/>
                <Blog/>
                <Blog/>
            </div>
        </div>
    );
}

export default Home;