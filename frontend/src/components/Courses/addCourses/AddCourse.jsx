import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleAddCourse } from "../../../store/actions/uiActions";
import CourseForm from '../CourseForm'
import Card from '../../UI/Card';
import './AddCourse.css';
export const AddCourse = () => {

    const dispatch = useDispatch();

    const toggleCourse = useSelector(state => state.uiModule.toggleAddCourse);

    const setToggleAddCourse = value => {
        dispatch(toggleAddCourse(value));
    }
    return (
        <div className='newCourse'>
            <Card>
                <button className="btn btn-toggle" onClick={() => setToggleAddCourse()}>ADD NEW COURSE</button>
                {toggleCourse && < CourseForm />}
            </Card>
        </div>
    );
};

