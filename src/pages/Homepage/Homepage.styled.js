import styled from 'styled-components';
import imgLight from '../../images/background-contacts.png';
import imgDark from '../../images/background-homepage-dark.png';

export const SectionHomepage = styled.section`
  padding: 0;
`;
export const HomepageListItem = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  align-items: center;
  padding: 50px 30px;
  background-image: url(${imgDark});
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: cover;
  text-transform: uppercase;

  font-family: Roboto;
  font-weight: 700;
  font-size: 40px;
  background-color: #fff;
  color: #e8ebeb;
  text-shadow: 0 1px #202c2d, -1px 0 #cdd2d5, -1px 2px #202c2d, -2px 1px #cdd2d5,
    -2px 3px #202c2d, -3px 2px #cdd2d5;

  :nth-child(2n + 1) {
    background-image: url(${imgLight});
    color: #2f3030;
    text-shadow: 0 1px #808d93, -1px 0 #cdd2d5, -1px 2px #808d93,
      -2px 1px #cdd2d5, -2px 3px #808d93, -3px 2px #cdd2d5, -3px 4px #808d93,
      -4px 3px #cdd2d5, -4px 5px #808d93, -5px 4px #cdd2d5;
    flex-direction: row;
  }
`;

export const Image = styled.img`
  display: block;
  width: 500px;
  height: 300px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;

export const ImageAdd = styled.img`
  display: block;
  width: 600px;
  height: 300px;
  box-shadow: rgba(111, 222, 222, 0.8) 0px 20px 30px 0px;
  border: 1px solid rgba(111, 222, 222, 0.8);
`;

export const TitleHomepage = styled.h1`
  font-family: Roboto;
  font-weight: 700;
  font-size: 60px;
  color: #202c2d;
  text-shadow: 0 1px #808d93, -1px 0 #cdd2d5, -1px 2px #808d93, -2px 1px #cdd2d5,
    -2px 3px #808d93, -3px 2px #cdd2d5, -3px 4px #808d93, -4px 3px #cdd2d5,
    -4px 5px #808d93, -5px 4px #cdd2d5;
`;

export const Description = styled.p`
    width: 400px;
`