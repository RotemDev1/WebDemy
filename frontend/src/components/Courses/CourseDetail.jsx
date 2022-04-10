import { useParams } from 'react-router-dom';
import { courseService } from '../../service/courseService';

import CoursePromo from './CoursePromo';

export const CourseDetail = (props) => {
    const params = useParams();
    const course = courseService.getById(params.id);
    return (
        course ? <CoursePromo subjects={course.subjects} mentor={course.mentor} /> :
            <h1> No Course find`</h1>

    );
};

