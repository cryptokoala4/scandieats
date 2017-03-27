import styled from 'styled-components';

const BannerPageText = styled.span`
  color: #fff;
  line-height: 1.5;
  position: absolute;
  white-space: normal;
  text-align: center;
  font-size: 36px;
  vertical-align: middle;
  // left: 50%;
  // transform: translateX(-50%) translateY(0%);
  left: 0;
  top: 40%;
  width: 100%;
  @media (max-width: 768px) {
    font-size: 1em;
    top: 20%;
  }
`;

export default BannerPageText;
