import styled from 'styled-components';

export const PMContainer = styled.div`
  color: #333;
  padding-bottom: 20px;
`;

export const PMTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 16px 0;
  color: #333;
  font-family: 'Inter', 'Arial', sans-serif;
`;

export const PMText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin: 0 0 24px 0;
  color: #555;
`;

export const PMSectionTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin: 24px 0 12px 0;
  color: #333;
  font-family: 'Inter', 'Arial', sans-serif;
`;

export const PMTechTags = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const PMTechTag = styled.span`
  background-color: #006FD0;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
`;

export const PMFeatureList = styled.ul`
  text-align: left;
  padding-left: 20px;
  margin: 16px 0 24px 0;
  
  li {
    margin-bottom: 8px;
    line-height: 1.5;
    color: #555;
  }
`;

export const PMActions = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 30px;
  flex-wrap: wrap;
  padding-bottom: 10px;
`;
