import { Link } from 'react-router-dom';
import classes from './Box.module.css'
import Card from './Card';

const Box = (props) => {
    return(
        <Card className={classes.box}>
            <div>
                <img src={props.img}/>
            </div>
            <div>
                <p>{props.text}</p>
            </div>
            <div>
                <Link to={props.link} className={classes.active}>click here to continue!</Link>
            </div>
        </Card>
    );
}

export default Box;