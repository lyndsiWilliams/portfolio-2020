import React from 'react';
import { render } from '@testing-library/react';
import { Home } from '../components/Home';

const introText = 'I am a full-stack web developer with a strong love for Front End. My passion for programming shows in my late-night adventures getting lost in my latest project. I ensure sustainable working practices by investing in breaks that typically involve video games. The Pomodoro technique will save your life in this career!';
const skillsText = 'React/Redux | Jest/Cypress Unit Testing | RESTful API | Deployment | Git | NodeJS | Express | SQL | GraphQL | Javascript | Typescript | Python | HTML | CSS | LESS/SASS | Agile Methodology'

describe('Home component tests', () => {
  it('renders the home component', () => {
    render(<Home />);
  });
  it('renders the photo in the intro card', () => {
    const { getByAltText } = render(<Home />);
    const photo = getByAltText('Lyndsi Kay Williams');

    expect(photo).toBeInTheDocument();
  });
  it('renders the intro text', () => {
    const { getByText } = render(<Home />);
    const intro = getByText(introText);

    expect(intro).toBeInTheDocument();
  });
  it('renders the skills', () => {
    const { getByText } = render(<Home />);
    const skills = getByText(skillsText);

    expect(skills).toBeInTheDocument();
  });
  it('renders 2 experience modal buttons', () => {
    const { getByTestId } = render(<Home />);
    const experienceBtns = getByTestId('experience-btns');

    expect(experienceBtns.childElementCount).toEqual(2);
  });
  it('renders Team Lead modal with 2 child elements', () => {
    const { getByTestId } = render(<Home />);
    const TLmodal = getByTestId('TLmodal');

    expect(TLmodal.childElementCount).toEqual(2);
  });
  it('renders POC modal with 2 child elements', () => {
    const { getByTestId } = render(<Home />);
    const POCmodal = getByTestId('POCmodal');
    
    expect(POCmodal.childElementCount).toEqual(2);
  });
  it('renders education section', () => {
    const { getByTestId } = render(<Home />);
    const education = getByTestId('education');

    expect(education.childElementCount).toEqual(9);
  });
  it('renders Bloom Institute of Technology (formerly Lambda School) badge', () => {
    const { getByAltText } = render(<Home />);
    const lambdaBadge = getByAltText('Full-Stack Web Development + Technical Interviewing Bloom Institute of Technology (formerly Lambda School) School badge');

    expect(lambdaBadge).toBeInTheDocument();
  });
});