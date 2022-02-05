import Blog from '../UI/Blog';
import Button from '../UI/Button';
import classes from './EditBlog.module.css';

const EditBlog = () => {

    return (
        <div className={classes.container}>
            <p>All Your Blogs</p>
            <div className={classes['blogs-container']}>
                <div>
                    <Blog/>
                    <Button className={classes.btn}>Delete Blog</Button>
                </div>
                <div>
                    <Blog/>
                    <Button className={classes.btn}>Delete Blog</Button>
                </div>
                <div>
                    <Blog/>
                    <Button className={classes.btn}>Delete Blog</Button>
                </div>
                <div>
                    <Blog/>
                    <Button className={classes.btn}>Delete Blog</Button>
                </div>
                <div>
                    <Blog/>
                    <Button className={classes.btn}>Delete Blog</Button>
                </div>
            </div>
        </div>
    )   
}

export default EditBlog;