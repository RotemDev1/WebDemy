import react from 'react';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import AvailableCourses from "./AvailableCourses";
import { AddCourse } from './addCourses/AddCourse';
import { CourseList } from './CourseList';
import { getCourses } from '../../store/actions/courseActions';

export const Courses = ({ props }) => {
	const dispatch = useDispatch();
	const filterCourses = useSelector((state) => state.courseModule.filterCourses);
	//get user from store and check if admin for prevent premiision of add course
	useEffect(() => {
		dispatch(getCourses(filterCourses));
	}, []);

	return (
		<div className="courses">
			<AddCourse />
			<CourseList />
		</div>
	);
};
