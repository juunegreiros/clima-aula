import React from 'react';
import {
  HeaderContainer,
  Checkbox,
  Toggle,
  List,
  HeaderLink,
  Navbar,
  ExternalLink,
  IconWrapper,
  RightContainer,
  ImageLink,
} from './Header.styles';
import { ReactComponent as EmailLogo } from '../../assets/email.svg';
import { ReactComponent as LinkedinLogo } from '../../assets/linkedin.svg';
import { ReactComponent as GithubLogo } from '../../assets/github.svg';
import { ReactComponent as BehanceLogo } from '../../assets/behance.svg';
import { ReactComponent as Daruma } from '../../assets/daruma.svg';

const Header: React.FC<{ theme: string; setTheme: (theme: string) => void }> = ({
  theme,
  setTheme,
}) => {
  const handleChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  return (
    <HeaderContainer>
      <ImageLink aria-label='Darumarts' to='/'>
        <Daruma />
      </ImageLink>
      <Navbar>
        <List bigSpace>
          <li>
            <HeaderLink to='/about-me'>Sobre mim</HeaderLink>
          </li>
          <li>
            <HeaderLink to='/projects'>Projetos</HeaderLink>
          </li>
        </List>
      </Navbar>
      <RightContainer>
        <nav>
          <List>
            <li>
              <ExternalLink href='https://github.com/darumarts/' aria-label='github'>
                <IconWrapper>
                  <GithubLogo />
                </IconWrapper>
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href='https://www.linkedin.com/in/darumarts/' aria-label='linkedin'>
                <IconWrapper>
                  <LinkedinLogo />
                </IconWrapper>
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href='https://www.behance.net/silvarenan'
                aria-label='behance'
              >
                <IconWrapper>
                  <BehanceLogo />
                </IconWrapper>
              </ExternalLink>
            </li>
            {/* <li>
              <ExternalLink href='mailto:negreirosjuu@gmail.com' aria-label='e-mail'>
                <IconWrapper>
                  <EmailLogo />
                </IconWrapper>
              </ExternalLink>
            </li> */}
          </List>
        </nav>
        <Checkbox id='toggle-theme' type='checkbox' onChange={handleChange} />
        <Toggle htmlFor='toggle-theme' />
      </RightContainer>
    </HeaderContainer>
  );
};

export default Header;
