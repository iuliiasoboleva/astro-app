import React from 'react';

import CustomButton from '../../ui/CustomButton';

const InfoCard = ({ icon, title, subtitle, buttonLabel, variant = 'solid', onButtonClick }) => {
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      {icon && (
        <div style={{ width: 40, height: 40 }}>
          <img src={icon} alt="" width="100%" height="100%" />
        </div>
      )}
      <h3 style={{ margin: 0 }}>{title}</h3>
      {subtitle && <p style={{ color: '#5b6b77' }}>{subtitle}</p>}
      {buttonLabel && (
        <CustomButton variant={variant} onClick={onButtonClick}>
          {buttonLabel}
        </CustomButton>
      )}
    </div>
  );
};

export default InfoCard;
