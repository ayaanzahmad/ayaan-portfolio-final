export default function Crest() {
  return (
    <svg
      viewBox="0 0 180 125"
      fill="none"
      aria-hidden="true"
      className="royal-crest"
    >
      <path
        d="M55 98C24 85 24 42 46 25M125 98c31-13 31-56 9-73"
        stroke="currentColor"
        strokeWidth=".8"
      />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i} transform={`translate(0 ${i * 12})`}>
          <path
            d="M35 29q-15-10-12-19 14 4 12 19Zm-1 7q12-11 16-7-2 12-16 7Z"
            fill="currentColor"
            opacity={0.5 + i * 0.08}
          />
          <path
            d="M145 29q15-10 12-19-14 4-12 19Zm1 7q-12-11-16-7 2 12 16 7Z"
            fill="currentColor"
            opacity={0.5 + i * 0.08}
          />
        </g>
      ))}
      <path d="M70 101q20 13 40 0" stroke="currentColor" strokeWidth="1" />
      <text
        x="90"
        y="84"
        textAnchor="middle"
        fill="currentColor"
        stroke="none"
        fontFamily="var(--font-serif),serif"
        fontSize="54"
        letterSpacing="-7"
      >
        AA
      </text>
    </svg>
  );
}
