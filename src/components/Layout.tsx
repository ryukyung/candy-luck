import styled from '@emotion/styled';
import { useEffect } from 'react';
import gsap from 'gsap';

const Layout = () => {
  useEffect(() => {
    const gsapTimeLine = gsap.timeline({ repeat: 2, repeatDelay: 1 });
    gsapTimeLine
      .fromTo(
        '.bg-circle',
        { y: -1200, autoAlpha: 1 },
        { y: 0, duration: 1, stagger: 0.1, ease: 'bounce.out' }
      )
      .to('.bg-circle', {
        autoAlpha: 0,
        duration: 1,
        stagger: { each: 0.1, from: 'end' },
      })
      .fromTo(
        '.bg-circle',
        { y: -1200, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 1, stagger: 0.1, ease: 'bounce.out' }
      );
  }, []);

  return (
    <LayoutStyled>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 1024"
        preserveAspectRatio="xMidYMid slice"
        style={{ width: '100%', height: '100%' }}>
        <path fill="var(--ivory)" d="M0 0h1440v1024H0z" />
        <circle
          className="bg-circle"
          r="74"
          fill="#52A9AE"
          cx="646"
          cy="1009"
        />
        <circle
          className="bg-circle"
          r="74"
          fill="#FFFFFF"
          cx="350"
          cy="1009"
        />
        <circle className="bg-circle" r="74" fill="#4C4ABF" cx="498" cy="993" />
        <circle className="bg-circle" r="74" fill="#E9D571" cx="202" cy="993" />
        <circle className="bg-circle" r="74" fill="#AE5252" cx="54" cy="1009" />
        <circle
          className="bg-circle"
          r="74"
          fill="#67AF6A"
          cx="1075"
          cy="1009"
        />
        <circle
          className="bg-circle"
          r="74"
          fill="#AF6792"
          cx="794"
          cy="1009"
        />
        <circle
          className="bg-circle"
          r="74"
          fill="#E5D432"
          cx="1218"
          cy="967"
        />
        <circle
          className="bg-circle"
          r="74"
          fill="#5292AE"
          cx="1361"
          cy="1009"
        />
        <circle className="bg-circle" r="74" fill="#5E3197" cx="935" cy="961" />
        <circle className="bg-circle" r="74" fill="#319772" cx="-32" cy="888" />
        <circle className="bg-circle" r="74" fill="#C8E557" cx="289" cy="874" />
        <circle
          className="bg-circle"
          r="74"
          fill="#E9D571"
          cx="1472"
          cy="911"
        />
        <circle className="bg-circle" r="74" fill="#BB3636" cx="115" cy="874" />
        <circle className="bg-circle" r="74" fill="#AE5252" cx="29" cy="752" />
        <circle className="bg-circle" r="74" fill="#4C4ABF" cx="202" cy="754" />
        <circle
          className="bg-circle"
          r="74"
          fill="#AE5252"
          cx="1326"
          cy="865"
        />
        <circle className="bg-circle" r="74" fill="#C8E557" cx="821" cy="863" />
        <circle
          className="bg-circle"
          r="74"
          fill="#319772"
          cx="1110"
          cy="864"
        />
        <circle className="bg-circle" r="74" fill="#AF6792" cx="117" cy="632" />
        <circle
          className="bg-circle"
          r="74"
          fill="#5E3197"
          cx="1218"
          cy="763"
        />
        <circle
          className="bg-circle"
          r="74"
          fill="#319772"
          cx="1386"
          cy="729"
        />
        <circle
          className="bg-circle"
          r="74"
          fill="#BB3636"
          cx="1277"
          cy="627"
        />
        <circle className="bg-circle" r="74" fill="#5292AE" cx="967" cy="816" />
        <circle className="bg-circle" r="74" fill="#E5D432" cx="437" cy="858" />
        <circle className="bg-circle" r="74" fill="#52A9AE" cx="265" cy="616" />
        <circle
          className="bg-circle"
          r="74"
          fill="#E9D571"
          cx="1418"
          cy="581"
        />
        <circle className="bg-circle" r="74" fill="#FFFFFF" cx="-31" cy="616" />
        <circle className="bg-circle" r="74" fill="#BB3636" cx="350" cy="738" />
        <circle
          className="bg-circle"
          r="74"
          fill="#67AF6A"
          cx="1077"
          cy="716"
        />
        <circle
          className="bg-circle"
          r="74"
          fill="#C8E557"
          cx="1136"
          cy="580"
        />
        <circle className="bg-circle" r="74" fill="#BB3636" cx="593" cy="865" />
        <circle className="bg-circle" r="74" fill="#AE5252" cx="857" cy="717" />
        <circle className="bg-circle" r="74" fill="#E9D571" cx="967" cy="616" />
        <circle className="bg-circle" r="74" fill="#319772" cx="57" cy="495" />
        <circle
          className="bg-circle"
          r="74"
          fill="#FFFFFF"
          cx="1308"
          cy="481"
        />
        <circle className="bg-circle" r="74" fill="#FFFFFF" cx="706" cy="767" />
        <circle className="bg-circle" r="74" fill="#AF6792" cx="520" cy="735" />
        <circle
          className="bg-circle"
          r="74"
          fill="#52A9AE"
          cx="1026"
          cy="479"
        />
        <circle
          className="bg-circle"
          r="74"
          fill="#4C4ABF"
          cx="1449"
          cy="435"
        />
        <circle
          className="bg-circle"
          r="74"
          fill="#E5D432"
          cx="1167"
          cy="433"
        />
      </svg>
    </LayoutStyled>
  );
};

export default Layout;

const LayoutStyled = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;
