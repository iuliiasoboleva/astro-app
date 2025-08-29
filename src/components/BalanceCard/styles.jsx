import styled from 'styled-components';

const VARIANTS = {
  tarot: {
    from: '#EDF8FF',
    to: '#F9FCFF',
    border: '#D7E7F6',
    text: '#546E7D',
    value: '#1F3541',
    title: '#437693',
  },
  astro: {
    from: '#FFF8F4',
    to: '#F9FCFF',
    border: '#F6E3D7',
    text: '#7D5F54',
    value: '#1F3541',
    title: '#A86D61',
  },
  refs: {
    from: '#F2F3FF',
    to: '#F9FCFF',
    border: '#D7DAF6',
    text: '#56547D',
    value: '#1F3541',
    title: '#7571BB',
  },
};

export const Card = styled.button`
  --from: ${({ $variant }) => VARIANTS[$variant]?.from || VARIANTS.tarot.from};
  --to: ${({ $variant }) => VARIANTS[$variant]?.to || VARIANTS.tarot.to};
  --border: ${({ $variant }) => VARIANTS[$variant]?.border || VARIANTS.tarot.border};
  --text: ${({ $variant }) => VARIANTS[$variant]?.text || VARIANTS.tarot.text};
  --title: ${({ $variant }) => VARIANTS[$variant]?.title || VARIANTS.tarot.title};
  --value: ${({ $variant }) => VARIANTS[$variant]?.value || VARIANTS.tarot.value};

  width: 100%;
  height: 140px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: start;
  gap: 6px;

  padding: 15px;
  border-radius: 15px;
  border: 1px solid var(--border);
  background:
    linear-gradient(180deg, var(--from) 0%, #fff 100%),
    linear-gradient(180deg, #fff -38.93%, var(--to) 131.79%);

  text-align: left;
  user-select: none;
  cursor: default;
`;

export const Header = styled.div`
  color: var(--title);
  font-family: var(--font-sfpro);
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const Value = styled.div`
  color: var(--value);
  font-family: var(--font-sfpro);
  font-size: 26px;
  font-weight: 600;
  line-height: 31.2px;
  letter-spacing: -0.78px;
`;

export const Subtitle = styled.div`
  white-space: pre-line;
  color: var(--text);
  font-family: var(--font-sfpro);
  font-size: 12px;
  font-weight: 400;
  line-height: 16.8px;
  letter-spacing: -0.42px;
`;
