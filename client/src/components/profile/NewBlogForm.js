import { useRef } from 'react';
import { useSelector } from 'react-redux';
import Button from '../UI/Button';
import classes from './NewBlogForm.module.css';

const NewBlogForm = () => {
    const user = useSelector(state=>state);
    const titleInputRef = useRef('');
    const urlInputRef = useRef('');
    const contentInputRef = useRef('');

    const addBlogHandler = async(event) => {
        event.preventDefault();
        console.log('execute');

        const title = titleInputRef.current.value;
        const url = urlInputRef.current.value;
        const content = contentInputRef.current.value;

        const response = await fetch('http://localhost:8000/api/store-userblog',{
            method:'POST',
            headers : {
                'x-access-token' : user.token
            },
            body : JSON.stringify({
                title,
                url,
                content
            })
        })
        const data = await response.json();
        alert('Blog Published Succesfully!!')
    }

    return (
        <div className={classes.container}>
            <p>Add new blog</p>
            <form onSubmit={addBlogHandler} className={classes.newform}>
                <input ref={titleInputRef} type='name' placeholder='Your title Here' required/>
                <input ref={urlInputRef} type='url' placeholder='Image Link' required/>
                <textarea ref={contentInputRef} type='text' rows='5' placeholder='Add Content Here' required/>
                <Button type='submit' className={classes.btn}>Publish Blog</Button>
            </form>
        </div>
    )   
}

export default NewBlogForm;