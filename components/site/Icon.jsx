const ICONS = {
  arrowRight: (
    <>
      <path d="M4 12h15.5" />
      <path d="m13.5 6 6 6-6 6" />
    </>
  ),
  users: (
    <>
      <path d="M16 20v-1.6a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20" />
      <circle cx={9.5} cy={7} r={3.3} />
      <path d="M17 4.2a3.3 3.3 0 0 1 0 6.3" />
      <path d="M20.5 20v-1.6a4 4 0 0 0-3-3.8" />
    </>
  ),
  cap: (
    <>
      <path d="M22 9.4 12 4 2 9.4l10 5.4 10-5.4Z" />
      <path d="M6 11.7V17c0 1.6 2.7 2.9 6 2.9s6-1.3 6-2.9v-5.3" />
      <path d="M22 9.4v5" />
    </>
  ),
  book: (
    <>
      <path d="M2.5 5.5h6a3.5 3.5 0 0 1 3.5 3.5v10a3 3 0 0 0-3-3h-6.5v-10.5Z" />
      <path d="M21.5 5.5h-6A3.5 3.5 0 0 0 12 9v10a3 3 0 0 1 3-3h6.5v-10.5Z" />
    </>
  ),
  heart: (
    <>
      <path d="M12 20.5 5.2 13.9a4 4 0 0 1 5.6-5.6l1.2 1.2 1.2-1.2a4 4 0 0 1 5.6 5.6L12 20.5Z" />
      <path d="M7 9.5c-1.6-1.4-2-3.6-.8-5.2" />
    </>
  ),
  clock: (
    <>
      <circle cx={12} cy={12} r={9} />
      <path d="M12 7v5.3l3.5 2" />
    </>
  )
};

export default function Icon({ name }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {ICONS[name]}
    </svg>
  );
}
