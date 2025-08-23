import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const Bar = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  margin: 0 auto;
  width: 100%;
  max-width: 420px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  padding: 10px 18px 14px;
  background: #fff;
  border-top: 1px solid #e8eef5;
`;

export const Icon = styled.span.attrs({ className: 'icon' })`
  width: 24px;
  height: 24px;
  background: #c1d0de;
  mask: url(${(p) => p.$src}) center / contain no-repeat;
  -webkit-mask: url(${(p) => p.$src}) center / contain no-repeat;
`;

export const Label = styled.span.attrs({ className: 'label' })`
  font-family: var(--font-sfpro);
  font-size: 12px;
  font-weight: 400;
  line-height: 14.4px;
  letter-spacing: -0.36px;
  color: #c1d0de;
`;

export const Item = styled(NavLink)`
  display: grid;
  justify-items: center;
  gap: 4px;
  padding: 8px 4px;
  text-decoration: none;
  background: transparent;
  border: 0;
  outline: none;

  &:focus-visible {
    outline: 2px solid rgba(53, 115, 255, 0.45);
    outline-offset: 2px;
    border-radius: 10px;
  }

  &[aria-current='page'] ${Icon} {
    background: linear-gradient(180deg, #0b1b24 0%, #203a46 55%, #2f4a56 100%);
  }
  &[aria-current='page'] ${Label} {
    color: #1f3541;
  }

  &[data-active='true'] ${Icon} {
    background: linear-gradient(180deg, #0b1b24 0%, #203a46 55%, #2f4a56 100%);
  }
  &[data-active='true'] ${Label} {
    color: #1f3541;
  }
`;
