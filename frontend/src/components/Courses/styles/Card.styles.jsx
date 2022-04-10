import tw, { styled } from "twin.macro";

export const SectionComponent = styled.section`

  ${tw`
      
  mt-12 
  mx-auto 
  px-4 
  max-w-screen-xl 
  lg:px-8
      `}
`;

export const TextCenterComponent = styled.div`

  ${tw`
  text-center
      
      `}
`;

export const TitleComponent = styled.h1`

  ${tw`
  text-3xl 
  text-gray-800 
  font-semibold
      
      `}
`;

export const PComponent = styled.p`

  ${tw`
  mt-3 
  text-gray-500
      
      `}
`;

export const Div2Component = styled.div`

  ${tw`
    ${'' /* mt-12 
    grid gap-2 
    sm:grid-cols-2 
    lg:grid-cols-3 */}

    mt-12 
    grid 
    gap-4 
    divide-y 
    md:grid-cols-2 
    md:divide-y-0 
    lg:grid-cols-3
      
      `}
`;

export const ArticleComponent = styled.article`

  ${tw`
  max-w-md 
  mx-auto 
  mt-4 
  shadow-lg 
  border 
  rounded-md 
  duration-300 
  hover:shadow-sm
  
      
      `}
`;

export const ImgComponent = styled.article`

  ${tw`

    w-full 
    h-48 
    rounded-t-md
      
      `}
`;

export const Div3Component = styled.article`

  ${tw`

    flex    
    items-center 
    mt-2 
    pt-3 
    ml-4 
    mr-2
      
      `}
`;

