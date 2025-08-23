import styled, { css } from 'styled-components';

const TONES = {
  blue: css`
    radial-gradient(
      240px 170px at 78% 42%,
      rgba(147, 189, 242, 0.42) 0%,
      rgba(147, 189, 242, 0.22) 38%,
      rgba(147, 189, 242, 0) 100%
    ),
  `,
  peach: css`
    radial-gradient(
      240px 170px at 78% 42%,
      rgba(255, 173, 140, 0.38) 0%,
      rgba(255, 173, 140, 0.2) 38%,
      rgba(255, 173, 140, 0) 100%
    ),
  `,
};

const COLORS = {
  blue: {
    text: '#437693',
    subtext: '#78A0B7',
    btnBg: '#EFF6FC',
    btnText: '#78A0B7',
  },
  peach: {
    text: '#A86D61',
    subtext: '#BE9289',
    btnBg: '#FFF7F4',
    btnText: '#BE9289',
  },
};

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 3px solid #ffffff;
  width: 100%;
  min-height: 160px;
  padding: 18px;
  border-radius: 25px;
  overflow: hidden;

  background:
    url(${(p) => p.$bg}) right center / auto 100% no-repeat,
    ${(p) => TONES[p.$tone || 'blue']}
      linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0) 55%),
    #ffffff;
`;

export const Title = styled.h3`
  font-family: var(--font-sfpro);
  font-size: 20px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.6px;
  margin: 0;
  color: ${(p) => COLORS[p.$tone || 'blue'].text};
`;

export const Text = styled.p`
  font-family: var(--font-sfpro);
  font-size: 12px;
  font-weight: 400;
  line-height: 14.4px;
  letter-spacing: -0.36px;
  white-space: pre-line;
  margin: 8px 0 0;
  color: ${(p) => COLORS[p.$tone || 'blue'].subtext};
`;

export const Btn = styled.button`
  align-self: flex-start;
  margin-top: auto;
  padding: 4px 8px;
  border-radius: 35px;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  font-family: var(--font-sfpro);
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.36px;

  background: ${(p) => COLORS[p.$tone || 'blue'].btnBg};
  color: ${(p) => COLORS[p.$tone || 'blue'].btnText};

  &:hover {
    background: ${(p) => (p.$tone === 'peach' ? '#FFF5F2' : '#f0f8ff')}; /* разное для тонов */
  }
`;
