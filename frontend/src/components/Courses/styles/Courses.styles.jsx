import tw, { styled } from "twin.macro";

export const YourStyledComponent = styled.div`

  // Put your pure CSS here.

  ${tw`
      shadow-lg
      border-solid
      
      `}
`;

export const CoursesContainer = styled.div`
  ${tw`
    my-8
    border-solid
    
    
  `}
`;

export const CoursesTitle = styled.h2`
  ${tw`
      text-yellow-400
      font-sans
      text-2xl
      font-bold
      uppercase
      mx-8
    `}
`;

export const CoursesRow = styled.div`
  ${tw`
      flex
      overflow-x-auto
      mt-4
      p-4
    `}

  &::-webkit-scrollbar {
    display: none;//I hide the scrollbar in a way that is similar to SCSS because styled components support it.
  }
`;

export const CoursesPoster = styled.img`
  ${tw`
    m-2
    w-40
  `}
  // Scale the movie img when the user hovers on it.
  transition: all 0.2s;
  &:hover {
  transform: scale(1.09);
  }
`;

export const CourseButton = styled.button`
  ${tw`
    font-sans
    text-blue-300
    cursor-pointer
    font-bold
    rounded
    px-8
    py-2
    mr-2
    mb-8
    ml-8
  `}
`;
