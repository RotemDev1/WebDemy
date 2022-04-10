import classes from './CoursePromo.module.css';

const CoursePromo = (props) => {
    return (
        <figure className={classes.quote}>
            <p>{props.subjects}</p>
            <figcaption>{props.mentor}</figcaption>
        </figure>
    );
};

export default CoursePromo;