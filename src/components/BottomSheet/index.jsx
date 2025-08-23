import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { Backdrop, Container, DragHandle, Sheet } from './styles';

const EXIT_MS = 240;

function useLockBodyScroll(locked) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (locked) document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = prev);
  }, [locked]);
}

const BottomSheet = ({
  open,
  onClose,
  children,
  height = 'auto',
  maxHeight = '85vh',
  ariaLabel = 'Диалоговое окно',
}) => {
  const sheetRef = useRef(null);
  const startY = useRef(null);
  const lastY = useRef(null);

  const [shouldRender, setShouldRender] = useState(open);
  const [isExiting, setIsExiting] = useState(false);

  const rafRef = useRef(null);
  const pendingDyRef = useRef(0);
  const applyTransform = useCallback(() => {
    rafRef.current = null;
    if (!sheetRef.current) return;
    const dy = pendingDyRef.current;
    sheetRef.current.style.transform = `translate3d(0, ${dy}px, 0)`;
  }, []);

  const scheduleTransform = useCallback(
    (dy) => {
      pendingDyRef.current = dy;
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(applyTransform);
      }
    },
    [applyTransform],
  );

  useEffect(() => {
    if (open) {
      setShouldRender(true);
      setIsExiting(false);
    } else if (shouldRender) {
      setIsExiting(true);
      const t = setTimeout(() => {
        setShouldRender(false);
        setIsExiting(false);
      }, EXIT_MS);
      return () => clearTimeout(t);
    }
  }, [open, shouldRender]);

  useLockBodyScroll(shouldRender && !isExiting);

  useEffect(() => {
    if (!shouldRender || isExiting) return;
    const onKey = (e) => e.key === 'Escape' && onClose?.();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [shouldRender, isExiting, onClose]);

  useEffect(() => {
    if (shouldRender && !isExiting && sheetRef.current) {
      const f = sheetRef.current.querySelector(
        "button, a, input, select, textarea, [tabindex]:not([tabindex='-1'])",
      );
      f?.focus();
    }
  }, [shouldRender, isExiting]);

  const onTouchStart = useCallback((e) => {
    if (!sheetRef.current) return;
    startY.current = e.touches[0].clientY;
    lastY.current = startY.current;
    sheetRef.current.style.transform = '';
  }, []);

  const onTouchMove = useCallback(
    (e) => {
      if (startY.current == null || !sheetRef.current) return;
      lastY.current = e.touches[0].clientY;
      const dy = Math.max(0, lastY.current - startY.current);
      scheduleTransform(dy);
    },
    [scheduleTransform],
  );

  const onTouchEnd = useCallback(() => {
    if (startY.current == null || !sheetRef.current) return;
    const dy = Math.max(0, (lastY.current ?? 0) - startY.current);
    startY.current = null;
    lastY.current = null;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;

    sheetRef.current.style.transform = '';

    if (dy > 80) {
      onClose?.();
    }
  }, [onClose]);

  if (!shouldRender) return null;

  return createPortal(
    <Container>
      <Backdrop onClick={onClose} aria-hidden $exiting={isExiting} />
      <Sheet
        ref={sheetRef}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        $height={height}
        $maxHeight={maxHeight}
        $exiting={isExiting}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <DragHandle aria-hidden />
        {children}
      </Sheet>
    </Container>,
    document.body,
  );
};

export default BottomSheet;
