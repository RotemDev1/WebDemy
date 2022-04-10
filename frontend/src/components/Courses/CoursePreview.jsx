import { Container } from "@material-ui/core";
import React from "react";
import { StyledContainer } from './styles/Courses.styles';

import { YourStyledComponent, CoursesContainer, CoursesTitle, CourseButton } from "./styles/Courses.styles";

import { Div2Component, ArticleComponent, ImgComponent, Div3Component } from './styles/Card.styles'

// import { Link } from "react-router-dom"


export function CoursePreview(props) {

  const { language, img, price, mentor, category } = props.course;

  return (
    <Div2Component>
      <ArticleComponent>
        <Div3Component>
          <ImgComponent>
            <img src={img} loading="lazy" />
          </ImgComponent>
          <CoursesTitle>
            <h2>{mentor}</h2>
            <h2>{language}</h2>
            <h2>{category}</h2>
            <h2>{price}</h2>
          </CoursesTitle>
        </Div3Component>
        <CourseButton
          onClick={() => {
            props.onBuyCourse(props.course);
          }}
        >
          Add To Cart
        </CourseButton>
      </ArticleComponent>
    </Div2Component>
  );
}
