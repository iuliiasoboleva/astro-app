import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

import checkIcon from '../../assets/icons/green-check.svg';
import closeIcon from '../../assets/icons/red-close.svg';
import rotateIcon from '../../assets/icons/rotate.svg';
import { Container, IconWrap, Item, Spinner, Title } from './styles';

const ToastCtx = createContext(null);

let idSeq = 0;

export function ToastProvider({ children }) {
  const [list, setList] = useState([]);

  const remove = useCallback((id) => {
    setList((xs) => xs.filter((t) => t.id !== id));
  }, []);

  const push = useCallback(
    (t) => {
      const id = ++idSeq;
      const toast = { id, type: t.type ?? 'info', text: t.text, duration: t.duration ?? 2000 };
      setList((xs) => [...xs, toast]);
      if (toast.duration !== 0) {
        setTimeout(() => remove(id), toast.duration);
      }
      return id;
    },
    [remove],
  );

  const api = useMemo(
    () => ({
      show: (opts) => push(opts),
      success: (text, duration = 2000) => push({ type: 'success', text, duration }),
      error: (text, duration = 2500) => push({ type: 'error', text, duration }),
      info: (text, duration = 2000) => push({ type: 'info', text, duration }),
      loading: (text) => push({ type: 'loading', text, duration: 0 }),
      dismiss: (id) => remove(id),
      dismissAll: () => setList([]),
    }),
    [push, remove],
  );

  return (
    <ToastCtx.Provider value={api}>
      {children}
      {createPortal(
        <Container>
          {list.map((t) => (
            <ToastItem key={t.id} toast={t} onClose={() => remove(t.id)} />
          ))}
        </Container>,
        document.body,
      )}
    </ToastCtx.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastCtx);
  if (!ctx) throw new Error('useToast must be used inside <ToastProvider>');
  return ctx;
}

function ToastItem({ toast, onClose }) {
  const { type, text } = toast;
  return (
    <Item $type={type} role="status" aria-live="polite" onClick={onClose}>
      <Icon type={type} />
      <Title>{text}</Title>
    </Item>
  );
}

function Icon({ type }) {
  if (type === 'loading') {
    return (
      <IconWrap $type={type}>
        <img src={rotateIcon} alt="" width={16} height={16} />
      </IconWrap>
    );
  }

  if (type === 'success') {
    return (
      <IconWrap $type={type}>
        <img src={checkIcon} alt="" width={16} height={16} />
      </IconWrap>
    );
  }

  if (type === 'error') {
    return (
      <IconWrap $type={type}>
        <img src={closeIcon} alt="" width={16} height={16} />
      </IconWrap>
    );
  }

  return (
    <IconWrap $type={type}>
      <img src={rotateIcon} alt="" width={16} height={16} />
    </IconWrap>
  );
}
