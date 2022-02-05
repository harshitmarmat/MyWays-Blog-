import Box from '../UI/Box';
import Card from '../UI/Card';
import classes from './Profile.module.css';

const Profile = () => {
    return(
        <div className={classes.container}>
            <div className={classes.title}>
                <span>What do you wish to do?</span>
            </div>
            <div className={classes['blogs-container']}>
                <Box img='https://cdn-icons-png.flaticon.com/512/2297/2297885.png' text='Write a new Blog' link='/new-blog-form'/>
                <Box img='https://cdn-icons-png.flaticon.com/512/2274/2274298.png' text='Edit Your Blog' link='edit-blog'/>
            </div>
        </div>
    );
}

export default Profile;