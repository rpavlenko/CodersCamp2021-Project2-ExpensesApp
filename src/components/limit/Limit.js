/* eslint-disable react/no-unknown-property */
import { StyledLimit } from './Limit.styles';

export default function Limit() {
  return (
    <StyledLimit>
      <p>Przekroczyłeś limit wydatków w kategorii Remont</p>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <rect width="30" height="30" fill="white" />
          <path
            d="M4.395 25.605C2.96234 24.2213 1.81961 22.5661 1.03348 20.7361C0.247341 18.906 -0.166453 16.9377 -0.18376 14.946C-0.201067 12.9543 0.178458 10.9791 0.932672 9.13569C1.68688 7.29224 2.80068 5.61747 4.20907 4.20908C5.61746 2.80069 7.29224 1.68689 9.13569 0.932676C10.9791 0.178462 12.9543 -0.201063 14.946 -0.183756C16.9377 -0.166449 18.906 0.247345 20.7361 1.03348C22.5661 1.81961 24.2213 2.96235 25.605 4.395C28.3374 7.22403 29.8493 11.0131 29.8151 14.946C29.7809 18.879 28.2034 22.6412 25.4223 25.4223C22.6412 28.2034 18.879 29.7809 14.946 29.8151C11.0131 29.8493 7.22403 28.3374 4.395 25.605ZM13.5 7.5V16.5H16.5V7.5H13.5ZM13.5 19.5V22.5H16.5V19.5H13.5Z"
            fill="#F4600C"
          />
        </g>
        <defs>
          <clipPath id="clip0_17_957">
            <rect width="30" height="30" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </StyledLimit>
  );
}