import React from 'react';
import { Link } from 'gatsby';
// import { Link } from 'react-scroll';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { DeviceSize } from '../responsive/index';
import { HeaderItems, SocialItems } from './items';
import MenuToggle from './menu-toggle';
import MenuLinks from './menu-links';
import { FaLaptopCode } from 'react-icons/fa';

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.intermediate });
  const [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <HeaderFixed>
        <HeaderFull>
          <HeaderGrow>
            <HeaderFlex>
              <Link to='/'>
                <div className='nav--logo'>
                  <FaLaptopCode />
                  <h3 className='fullname'>
                    <span>Yassine </span>Tababi
                  </h3>
                </div>
              </Link>
            </HeaderFlex>
          </HeaderGrow>
          <ItemsCenter>
            {!isMobile && (
              <ItemsFlex>
                {HeaderItems.map((item, i) => (
                  <LinkLi key={i}>
                    <Link
                      to={item.url}
                      // activeClass='active'
                      // spy={true}
                      // smooth={true}
                      // offset={-100}
                      // duration={500}
                    >
                      <LinkItems>{item.title}</LinkItems>
                    </Link>
                  </LinkLi>
                ))}
                {SocialItems.map((item, i) => (
                  <LinkLi key={i}>
                    <LinkSocials
                      href={item.url}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {item.icon}
                    </LinkSocials>
                  </LinkLi>
                ))}
              </ItemsFlex>
            )}
          </ItemsCenter>
          {isMobile && (
            <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
          )}
        </HeaderFull>
      </HeaderFixed>
      {isMobile && <MenuLinks isOpen={isOpen} />}
    </>
  );
};

export default Header;

const HeaderFixed = styled.header`
  position: fixed;
  top: 0;
  z-index: var(--z-fixed);
  width: 100%;
  padding: 32px 32px 0 32px;
`;

const HeaderFull = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const HeaderGrow = styled.div`
  flex-grow: 1;
`;

const HeaderFlex = styled.div`
  display: flex;
`;

const ItemsCenter = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    visibility: hidden;
  }
`;

const ItemsFlex = styled.ul`
  display: flex;
  align-items: center;
`;

const LinkLi = styled.li`
  /* margin-left: 8px; */
  margin-left: 24px;

  &:first-child {
    margin: 0;
  }
`;

const LinkItems = styled.p`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transition-duration: 0.5s;
  font-size: clamp(12px, 2vw, 15px);

  &::after {
    position: absolute;
    content: '';
    width: 0%;
    height: 2px;
    background-color: var(--bluerod);
    left: 50%;
    bottom: -2px;
    transition: all 0.4s ease-in-out;
  }

  &:hover {
    color: var(--bluerod);
    transition: all 0.4s ease-in-out;

    &::after {
      width: 100%;
      left: 0%;
    }
  }
`;

const LinkSocials = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transition-duration: 0.5s;
  font-family: var(--ff-witcher);
  font-size: clamp(12px, 2vw, 18px);

  &:hover {
    color: var(--orange);
    transition-duration: 0.5s;
    transform: scale(1.2);
  }
`;
