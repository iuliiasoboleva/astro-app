import React, {
  isValidElement,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { Indicator, TabBtn, TabIcon, TabIconImg, TabLabel, Track, Wrap } from './styles';

export const CustomTabsIcon = ({
  items = [],
  value,
  onChange,
  className,
  ariaLabel = 'Tabs with icons',
}) => {
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

  const renderIcon = (it, active) => {
    let iconNode =
      (it.icons && (active ? it.icons.active : it.icons.inactive)) ??
      (active ? it.iconActive : it.iconInactive) ??
      it.icon;

    if (!iconNode) return null;

    if (typeof iconNode === 'string') {
      return <TabIconImg src={iconNode} alt="" aria-hidden $active={active} />;
    }

    if (isValidElement(iconNode)) {
      return (
        <TabIcon $active={active} aria-hidden>
          {iconNode}
        </TabIcon>
      );
    }

    if (typeof iconNode === 'function') {
      const node = iconNode({ active });
      return isValidElement(node) ? (
        <TabIcon $active={active} aria-hidden>
          {node}
        </TabIcon>
      ) : null;
    }

    return null;
  };

  return (
    <Wrap
      ref={wrapRef}
      role="tablist"
      aria-label={ariaLabel}
      className={className}
      onKeyDown={handleKeyDown}
    >
      <Track />
      <Indicator style={{ width: indicator.width, transform: `translateX(${indicator.left}px)` }} />
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
            $disabled={!!it.disabled}
            onClick={() => !it.disabled && onChange?.(it.value)}
          >
            {renderIcon(it, active)}
            <TabLabel $active={active}>{it.label}</TabLabel>
          </TabBtn>
        );
      })}
    </Wrap>
  );
};

export default CustomTabsIcon;
