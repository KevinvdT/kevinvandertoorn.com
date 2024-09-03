import React from "react";
import styled from "styled-components";


const ButtonStyled = styled.svg`
  position: relative;
  top: -0.35em;
  margin-right: 20px;
  width: 22px;
   & path {
    fill:  #888;
    transition: 300ms;
  }

  &:hover path {
    fill: ${({ theme }) => theme.colors.light.primaryText};;
  }

  @media (prefers-color-scheme: dark) {
    fill:  ${({ theme }) => theme.colors.dark.secondaryText};
    transition: 500ms;

    &:hover path {
    fill: ${({ theme }) => theme.colors.dark.primaryText};;
  }
  }
`;
const LinkedInStyled = styled(ButtonStyled)`

`;
export const ButtonLinkedIn = () => {
  return (
    <a href="https://www.linkedin.com/in/kevinvandertoorn/" target="_blank" rel="noopener noreferrer">
      <LinkedInStyled width={38} height={37} viewBox="0 0 38 37" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.75786 36.2676V12.2903H0.788256V36.2676H8.75786ZM4.77302 9.0166C7.55218 9.0166 9.28198 7.17541 9.28198 4.87446C9.23019 2.52172 7.55219 0.731617 4.82574 0.731617C2.09958 0.731617 0.317139 2.52172 0.317139 4.87446C0.317139 7.17541 2.04657 9.0166 4.72108 9.0166H4.77287H4.77302Z"

        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.1676 36.2676H21.1371V22.8776C21.1371 22.161 21.1889 21.4451 21.3994 20.9329C21.9755 19.5011 23.2868 18.0182 25.4884 18.0182C28.3723 18.0182 29.5259 20.217 29.5259 23.4403V36.2676H37.4948V22.5193C37.4948 15.1546 33.563 11.7277 28.3196 11.7277C24.0202 11.7277 22.1328 14.1308 21.0841 15.7676H21.1373V12.2903H13.1678C13.2724 14.5402 13.1678 36.2676 13.1678 36.2676H13.1676Z"

        />
      </LinkedInStyled>
    </a>
  );
};

const GithubStyled = styled(ButtonStyled)`
  & path {
    fill: ${({ theme }) => theme.button};
    transition: 500ms;
  }
  &:hover path {
    fill: ${({ theme }) => theme.buttonGithubHover};
  }
`;

export const ButtonGithub = () => {
  return (
    <a href="https://github.com/KevinvdT" target="_blank" rel="noopener noreferrer">
      <GithubStyled width={36} height={36} viewBox="0 0 36 36" fill="none">
        <path
          d="M0.199829 18.0706C0.199829 25.9639 5.30262 32.6306 12.3886 34.9944C13.2799 35.1507 13.6141 34.6155 13.6141 34.1476C13.6141 33.7235 13.5919 32.319 13.5919 30.825C9.11299 31.6495 7.95428 29.7318 7.59776 28.7287C7.39721 28.2159 6.52818 26.6328 5.77056 26.2091C5.14664 25.8745 4.25532 25.0497 5.74827 25.0274C7.1521 25.0051 8.15483 26.3205 8.48907 26.8556C10.0934 29.5535 12.656 28.7959 13.681 28.3273C13.837 27.1679 14.3049 26.387 14.8174 25.9413C10.8511 25.4957 6.70644 23.9571 6.70644 17.1344C6.70644 15.1941 7.39721 13.5887 8.53364 12.3402C8.35538 11.8945 7.73145 10.0659 8.7119 7.61277C8.7119 7.61277 10.2049 7.14482 13.6141 9.44134C15.0402 9.04024 16.5555 8.83935 18.0707 8.83935C19.586 8.83935 21.1012 9.04024 22.5273 9.44134C25.9366 7.12254 27.4295 7.61311 27.4295 7.61311C28.41 10.0656 27.7861 11.8938 27.6078 12.3398C28.7442 13.5884 29.435 15.1715 29.435 17.1337C29.435 23.979 25.2681 25.495 21.3017 25.9413C21.948 26.4987 22.505 27.569 22.505 29.2412C22.505 31.6272 22.4827 33.5446 22.4827 34.1469C22.4827 34.6149 22.817 35.1719 23.7083 34.9937C30.7497 32.631 35.8525 25.942 35.8525 18.071C35.8525 8.21475 27.8752 0.232666 18.0262 0.232666C8.17711 0.232666 0.199829 8.21509 0.199829 18.0706Z"
          fill="#B9B9B9"
        />
      </GithubStyled>
    </a>
  );
};

const StackOverflowStyled = styled(ButtonStyled)`
  & path {
    fill: ${({ theme }) => theme.button};
    transition: 500ms;
  }
  &:hover path:nth-of-type(1) {
    fill: rgb(188, 187, 187);
  }
  &:hover path:nth-of-type(2) {
    fill: rgb(244, 128, 36);
  }
`;

export const ButtonStackOverflow = () => {
  return (
    <a href="https://stackoverflow.com/users/4558558/kevin" target="_blank" rel="noopener noreferrer">
      <StackOverflowStyled
        width={30}
        height={35}
        viewBox="0 0 30 35"
        fill="none"
      >
        <path
          d="M24.7921 31.2305V22.12H27.8288V34.2676H0.516113V22.12H3.55276V31.2305H24.7921Z"
          fill="#B9B9B9"
        />
        <path
          d="M6.59277 28.1935H21.776V25.1568H6.59277V28.1935ZM20.2007 0.23263L17.7641 2.04484L26.8257 14.2277L29.2623 12.4155L20.2007 0.23263ZM12.6691 7.4151L24.3361 17.1318L26.2794 14.7983L14.6125 5.08166L12.6691 7.4151ZM8.86029 14.1675L22.6241 20.5776L23.9061 17.8249L10.1423 11.4148L8.86029 14.1675ZM6.89429 21.2821L21.753 24.405L22.3775 21.4332L7.51883 18.3103L6.89429 21.2821Z"
          fill="#B9B9B9"
        />
      </StackOverflowStyled>
    </a>
  );
};