import React from 'react';
import { CoursePreview } from './CoursePreview';
import { useSelector } from 'react-redux';
import { SectionComponent, TextCenterComponent, TitleComponent, PComponent } from './styles/Card.styles';

export const CourseList = ({ onBuyProduct }) => {
	const courses = useSelector((state) => state.courseModule.courses);

	return (
		<SectionComponent>
			<TextCenterComponent>
				<TitleComponent> Courses </TitleComponent>
				<PComponent>
					many courses you can take
				</PComponent>
				{courses && courses.map((course, index) =>
					<CoursePreview
						key={index}
						course={course}
						onBuyProduct={onBuyProduct}
					/>
				)}
			</TextCenterComponent>
		</SectionComponent>

	);
};
