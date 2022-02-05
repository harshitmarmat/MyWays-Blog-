import { Link } from 'react-router-dom';
import classes from './Blog.module.css'
import Card from './Card';
const Blog = () => {
    return(
        <Card className={classes.container}>
            <div>
                <img src='https://tutes.in/wp-content/uploads/2018/11/web_application_framework-01.png' />
            </div>
            <div>
                <div className={classes.title}>
                    <span>Must Learn Web Development frameworks in 2022</span>
                </div>
                <div className={classes.content}>
                    <span>
                    The blog lists down some of the most popular web frameworks that should be on a new-age web develope...
                    </span>
                </div>
            </div>
            <div className={classes['bottom-box']}>
                <Link className={classes.active}>Read more...</Link>
            </div>
        </Card>
    );
}

export default Blog