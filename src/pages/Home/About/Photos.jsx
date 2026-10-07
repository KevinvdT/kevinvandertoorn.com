import styled from 'styled-components';
import spacexPhoto from './spacex-hq.png';
import googleplexPhoto from './googleplex.png';
import spacexMobilePhoto from './spacex-hq-mobile.png';
import googleplexMobilePhoto from './googleplex-mobile.png';
import captionOutlines from './photo-captions.svg';
import frameArtwork from './polaroid-frames.svg';
import { theme } from '../../../styles/theme';

const Wrapper = styled.div`
  display: flex;
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    justify-content: center;
  }
`;

const Collage = styled.div`
  position: relative;
  width: 352.501658px;
  max-width: calc(100% - 3rem);
  aspect-ratio: 352.501658 / 272.631718;
  flex: none;
  container-type: inline-size;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 216.29025px;
    aspect-ratio: 216.29025 / 160.937298;
  }
`;

const Polaroid = styled.figure`
  --unit: calc(100cqi / 352.501658);
  position: absolute;
  width: 51.3473%;
  aspect-ratio: 181 / 207;
  border-radius: calc(2.5638852 * var(--unit));

  &[data-polaroid='spacex'] {
    left: 4.4281%;
    top: 18.0664%;
    transform: rotate(-6deg);
    z-index: 1;
  }

  &[data-polaroid='googleplex'] {
    left: 43.2932%;
    top: 5.5958%;
    transform: rotate(8deg);
    z-index: 2;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    --unit: calc(100cqi / 216.29025);
    width: calc(105.944327 / 216.29025 * 100%);
    border-radius: calc(1.50071322 * var(--unit));

    &[data-polaroid='spacex'] {
      left: calc(11.4419 / 216.29025 * 100%);
      top: calc(9.1808 / 160.937298 * 100%);
      transform: rotate(8deg);
    }

    &[data-polaroid='googleplex'] {
      left: calc(95.1438 / 216.29025 * 100%);
      top: calc(25.5674 / 160.937298 * 100%);
      transform: rotate(-12deg);
    }
  }
`;

const Frame = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;
  z-index: -1;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

const MobileFrame = styled(Frame)`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: block;
  }
`;

const Shadow = () => (
  <>
    <Frame viewBox="0 0 181 207" aria-hidden="true" focusable="false">
      <use href={`${frameArtwork}#desktop-frame`} />
    </Frame>
    <MobileFrame viewBox="0 0 105.944327 121.143627" aria-hidden="true" focusable="false">
      <use href={`${frameArtwork}#mobile-frame`} />
    </MobileFrame>
  </>
);

const PhotoWindow = styled.picture`
  position: absolute;
  left: calc(6 / 181 * 100%);
  top: calc(12 / 207 * 100%);
  display: block;
  width: calc(169 / 181 * 100%);
  height: calc(153 / 207 * 100%);
  overflow: hidden;
  border-radius: calc(2.5638852 * var(--unit));

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    left: calc(3.512 / 105.944327 * 100%);
    top: calc(7.0228 / 121.143627 * 100%);
    width: calc(98.920394 / 105.944327 * 100%);
    height: calc(89.5409418 / 121.143627 * 100%);
    border-radius: calc(1.50071322 * var(--unit));
  }
`;

const Img = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;

  [data-polaroid='spacex'] & {
    width: calc(152 / 169 * 100%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    [data-polaroid='spacex'] & {
      left: calc(-2 / 98.920394 * 100%);
      top: calc(-1 / 89.5409418 * 100%);
      width: calc(91 / 98.920394 * 100%);
      height: calc(91 / 89.5409418 * 100%);
    }

    [data-polaroid='googleplex'] & {
      left: calc(-0.129621777 / 98.920394 * 100%);
      top: calc(-0.191046488 / 89.5409418 * 100%);
      width: calc(100 / 98.920394 * 100%);
      height: calc(90 / 89.5409418 * 100%);
    }
  }
`;

const Caption = styled.figcaption`
  position: absolute;
  top: 79.7101%;
  width: 100%;
  height: 20.2899%;
  color: #656565;
`;

const CaptionOutline = styled.svg`
  display: block;
  width: 100%;
  height: 100%;
`;

const CaptionText = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
`;

const Photos = () => (
  <Wrapper>
    <Collage>
      <Polaroid data-polaroid="spacex">
        <Shadow />
        <PhotoWindow>
          <source media={`(max-width: ${theme.breakpoints.sm})`} srcSet={spacexMobilePhoto} />
          <Img src={spacexPhoto} alt="Me beside a Dragon capsule at SpaceX headquarters" width="608" height="612" draggable={false} />
        </PhotoWindow>
        <Caption>
          <CaptionOutline viewBox="0 165 181 42" aria-hidden="true" focusable="false">
            <use href={`${captionOutlines}#SpaceX-HQ`} />
          </CaptionOutline>
          <CaptionText>SpaceX HQ</CaptionText>
        </Caption>
      </Polaroid>
      <Polaroid data-polaroid="googleplex">
        <Shadow />
        <PhotoWindow>
          <source media={`(max-width: ${theme.breakpoints.sm})`} srcSet={googleplexMobilePhoto} />
          <Img src={googleplexPhoto} alt="Me beside an Android statue at Googleplex" width="676" height="612" draggable={false} />
        </PhotoWindow>
        <Caption>
          <CaptionOutline viewBox="0 165 181 42" aria-hidden="true" focusable="false">
            <use href={`${captionOutlines}#Googleplex`} />
          </CaptionOutline>
          <CaptionText>Googleplex</CaptionText>
        </Caption>
      </Polaroid>
    </Collage>
  </Wrapper>
);

export default Photos;