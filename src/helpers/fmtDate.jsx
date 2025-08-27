// ДД.ММ.ГГГГ
export const fmtDateRu = (v) => {
  const d = String(v || '')
    .replace(/\D/g, '')
    .slice(0, 8);
  const dd = d.slice(0, 2);
  const mm = d.slice(2, 4);
  const yyyy = d.slice(4, 8);
  return [dd, mm, yyyy].filter(Boolean).join('.');
};

// ДД.ММ.ГГГГ -> YYYY-MM-DD
export const ruToIso = (ru) => {
  const m = /^(\d{2})\.(\d{2})\.(\d{4})$/.exec(ru || '');
  if (!m) return '';
  const [, dd, mm, yyyy] = m;
  return `${yyyy}-${mm}-${dd}`;
};

// YYYY-MM-DD -> ДД.ММ.ГГГГ
export const isoToRu = (iso) => {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || '');
  if (!m) return '';
  const [, yyyy, mm, dd] = m;
  return `${dd}.${mm}.${yyyy}`;
};

export const fmtTime = (v) => {
  const d = v.replace(/\D/g, '').slice(0, 4);
  let h = d.slice(0, 2);
  let m = d.slice(2, 4);
  if (h.length === 2) h = String(Math.min(23, parseInt(h || '0', 10))).padStart(2, '0');
  if (m.length === 2) m = String(Math.min(59, parseInt(m || '0', 10))).padStart(2, '0');
  return [h, m].filter(Boolean).join(':');
};
