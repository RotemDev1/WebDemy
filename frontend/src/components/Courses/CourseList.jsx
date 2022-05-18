import React from 'react';
import { CoursePreview } from './CoursePreview';
import { useSelector } from 'react-redux';

export const CourseList = () => {
	const courses = useSelector((state) => state.courseModule.courses);
	return (
		<div className="course-list">
			{courses && courses.map((course, index) =>
				<CoursePreview
					key={index}
					course={course}
				/>
			)}
		</div>
	);
};
