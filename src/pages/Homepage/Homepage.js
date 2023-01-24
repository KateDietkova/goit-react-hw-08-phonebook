import {
  SectionHomepage,
  HomepageListItem,
  Image,
  ImageAdd,
  TitleHomepage,
  Description,
} from './Homepage.styled';
import phonebook from '../../images/phonebook-screen.png';
import phonebookAdd from '../../images/phonebook-screen-add.png';
import phonebookEdit from '../../images/phonebook-screen-edit.png';
import phonebookSearch from '../../images/phonebook-screen-search.png';

const Homepage = () => {
  return (
    <SectionHomepage>
      <ul>
        <HomepageListItem>
          <div>
            Just simple solution
            <TitleHomepage>Phonebook</TitleHomepage>
          </div>
          <Image src={phonebook} alt="phonebook-screenshot" />
        </HomepageListItem>
        <HomepageListItem>
          <Description>You can add contact</Description>
          <ImageAdd src={phonebookAdd} alt="how add contact" />
        </HomepageListItem>
        <HomepageListItem>
          <Description>Also can simply edit contact</Description>
          <Image src={phonebookEdit} alt="how edit contact" />
        </HomepageListItem>
        <HomepageListItem>
          <Description>And you can find contact quickly</Description>
          <ImageAdd src={phonebookSearch} alt="how search contact" />
        </HomepageListItem>
      </ul>
    </SectionHomepage>
  );
};

export default Homepage;
