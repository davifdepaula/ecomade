import React from 'react';
import GlobalStyle from './Toggle.styled';

export default function Toggle(props) {
  const { setToggleValue, toggleValue } = props;

  return (
    <>
      <GlobalStyle />
      <div className="toggler">
        <input type="checkbox" onChange={() => setToggleValue(!toggleValue)} checked={toggleValue ? 'checked' : false} />
        <div className="toggler-track">
          <div className="hexagon-wrap">
            <div className="hexagon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user login-icon">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-layers register-icon">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
