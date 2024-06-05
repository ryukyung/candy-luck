import { useEffect } from 'react';
import gsap from 'gsap';
import styled from '@emotion/styled';
import selectClassElement from '../utils/selectClassElement';

const Logo = () => {
  useEffect(() => {
    const gsapTimeLine = gsap.timeline();
    const elements = ['one', 'two', 'three', 'four', 'five', 'six'];

    elements.forEach((ele) => {
      const stagger = ele === 'four' ? 0.1 : 0.3;
      gsapTimeLine.fromTo(
        selectClassElement(ele),
        { y: -400 },
        { y: 0, stagger }
      );
    });
  }, []);

  return (
    <LogoCover>
      <LogoContent>
        <svg
          width={90}
          height={180}
          viewBox="0 0 192 369"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <ellipse
            className="three"
            cx={96}
            cy={129.5}
            rx={96}
            ry={95.5}
            fill="#1E6CA3"
          />
          <rect
            className="one"
            x={8}
            y={353}
            width={177}
            height={16}
            rx={4}
            fill="#CD4B41"
          />
          <path
            className="five"
            d="M161 61H30C32.658 33.0753 53.2572 20.698 63.2246 18H126.826C151.887 22.0471 160.051 48.3529 161 61Z"
            fill="#CD4B41"
          />
          <path
            className="six"
            d="M68 14C68 14 96.3457 -17.5 124 14H68Z"
            fill="#CD4B41"
          />
          <mask
            id="mask0_49_7"
            style={{
              maskType: 'alpha',
            }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={34}
            width={192}
            height={191}>
            <ellipse
              className="three"
              cx={96}
              cy={129.5}
              rx={96}
              ry={95.5}
              fill="#5A79AD"
            />
          </mask>
          <g mask="url(#mask0_49_7)">
            <circle
              className="four"
              cx={35.5}
              cy={168.5}
              r={18.5}
              fill="#319741"
            />
            <circle
              className="four"
              cx={122.5}
              cy={197.5}
              r={18.5}
              fill="#52A9AE"
            />
            <circle
              className="four"
              cx={108.5}
              cy={122.5}
              r={18.5}
              fill="#5292AE"
            />
            <circle
              className="four"
              cx={93.5}
              cy={150.5}
              r={18.5}
              fill="#AE5252"
            />
            <circle
              className="four"
              cx={90.5}
              cy={178.5}
              r={18.5}
              fill="#C8E557"
            />
            <circle
              className="four"
              cx={133.5}
              cy={141.5}
              r={18.5}
              fill="white"
            />
            <circle
              className="four"
              cx={75.5}
              cy={128.5}
              r={18.5}
              fill="#BB3636"
            />
            <circle
              className="four"
              cx={49.5}
              cy={187.5}
              r={18.5}
              fill="#5E3197"
            />
            <circle
              className="four"
              cx={18.5}
              cy={130.5}
              r={18.5}
              fill="#4C4ABF"
            />
            <circle
              className="four"
              cx={149.5}
              cy={167.5}
              r={18.5}
              fill="#5E3197"
            />
            <circle
              className="four"
              cx={117.5}
              cy={154.5}
              r={18.5}
              fill="#319772"
            />
            <circle
              className="four"
              cx={61.5}
              cy={142.5}
              r={18.5}
              fill="#E9D571"
            />
            <circle
              className="four"
              cx={66.5}
              cy={165.5}
              r={18.5}
              fill="#AF6792"
            />
            <circle
              className="four"
              cx={165.5}
              cy={146.5}
              r={18.5}
              fill="#E5D432"
            />
            <circle
              className="four"
              cx={165.5}
              cy={173.5}
              r={18.5}
              fill="#67AF6A"
            />
            <circle
              className="four"
              cx={91.5}
              cy={202.5}
              r={18.5}
              fill="#977B31"
            />
            <circle
              className="four"
              cx={29.5}
              cy={146.5}
              r={18.5}
              fill="white"
            />
            <circle
              className="four"
              cx={123.5}
              cy={179.5}
              r={18.5}
              fill="white"
            />
            <circle
              className="four"
              cx={76.5}
              cy={197.5}
              r={18.5}
              fill="white"
            />
            <circle
              className="four"
              cx={149.5}
              cy={196.5}
              r={18.5}
              fill="#913A5E"
            />
          </g>
          <path
            className="two"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M45.0657 208C35.474 208 27.3285 215.024 25.9178 224.511L8.02457 344.849C7.7778 346.509 9.06358 348 10.7414 348H95.6704C95.9138 348 96.1562 347.996 96.3975 347.987C96.6388 347.996 96.8811 348 97.1246 348H182.053C183.731 348 185.017 346.509 184.77 344.849L166.877 224.511C165.466 215.024 157.321 208 147.729 208H97.1245C96.8811 208 96.6387 208.004 96.3975 208.013C96.1562 208.004 95.9138 208 95.6704 208H45.0657Z"
            fill="#CD4B41"
          />
          <path
            className="two"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M137 208H54V255.658V256.632H54.0224C54.7485 272.386 73.0408 285 95.5 285C117.959 285 136.251 272.386 136.978 256.632H137V255.658V208Z"
            fill="#1A2544"
          />
          <rect
            className="two"
            x={62}
            y={300}
            width={67}
            height={37}
            rx={5}
            fill="#1A2544"
          />
          <path
            className="two"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M81.3839 224.626C81.3839 217.101 87.4846 211 95.0102 211C102.536 211 108.636 217.101 108.636 224.626V240.582C114.292 244.762 117.96 251.478 117.96 259.051C117.96 271.725 107.685 282 95.0101 282C82.3354 282 72.0606 271.725 72.0606 259.051C72.0606 251.478 75.7282 244.762 81.3839 240.582V224.626Z"
            fill="#1E6CA3"
          />
          <circle
            className="two"
            cx={95.0101}
            cy={226.06}
            r={10.0404}
            fill="#1A2544"
          />
          <circle
            className="two"
            cx={95.01}
            cy={260.485}
            r={7.88889}
            fill="#1A2544"
          />
          <rect
            className="two lever"
            x={77.6748}
            y={259.601}
            width={33.9045}
            height={5.47846}
            rx={2.73923}
            transform="rotate(-8.03913 77.6748 259.601)"
            fill="#1A2544"
          />
        </svg>
      </LogoContent>
    </LogoCover>
  );
};

export default Logo;

const LogoCover = styled.div`
  width: 200px;
  height: 200px;
  padding: 10px;
`;
const LogoContent = styled.div`
  background-color: white;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
