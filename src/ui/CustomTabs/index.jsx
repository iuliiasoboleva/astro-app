import React, { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';

import { Indicator, TabBtn, Wrap } from './styles';

export const Tabs = ({ items = [], value, onChange, className, ariaLabel = 'Tabs' }) => {
  const activeIndex = useMemo(
    () =>
      Math.max(
        0,
        items.findIndex((i) => i.value === value),
      ),
    [items, value],
  );

  const wrapRef = useRef(null);
  const btnRefs = useRef({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const recalc = useCallback(() => {
    const wrap = wrapRef.current;
    const btn = btnRefs.current[items[activeIndex]?.value];
    if (!wrap || !btn) return;
    const wrapRect = wrap.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    setIndicator({
      left: btnRect.left - wrapRect.left,
      width: btnRect.width,
    });
  }, [activeIndex, items]);

  useLayoutEffect(() => {
    recalc();
    window.addEventListener('resize', recalc);
    return () => window.removeEventListener('resize', recalc);
  }, [recalc]);

  const handleKeyDown = useCallback(
    (e) => {
      if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(e.key)) return;
      e.preventDefault();
      const last = items.length - 1;
      let next = activeIndex;
      if (e.key === 'ArrowRight') next = activeIndex === last ? 0 : activeIndex + 1;
      if (e.key === 'ArrowLeft') next = activeIndex === 0 ? last : activeIndex - 1;
      if (e.key === 'Home') next = 0;
      if (e.key === 'End') next = last;
      onChange?.(items[next].value);
    },
    [activeIndex, items, onChange],
  );

  return (
    <Wrap
      ref={wrapRef}
      role="tablist"
      aria-label={ariaLabel}
      className={className}
      onKeyDown={handleKeyDown}
    >
      <Indicator
        style={{
          width: indicator.width,
          transform: `translateX(${indicator.left}px)`,
        }}
      />
      {items.map((it) => {
        const active = it.value === value;
        return (
          <TabBtn
            key={it.value}
            ref={(el) => (btnRefs.current[it.value] = el)}
            role="tab"
            aria-selected={active}
            aria-controls={`${it.value}-panel`}
            tabIndex={active ? 0 : -1}
            $active={active}
            onClick={() => onChange?.(it.value)}
          >
            {it.label}
          </TabBtn>
        );
      })}
    </Wrap>
  );
};

export default Tabs;
