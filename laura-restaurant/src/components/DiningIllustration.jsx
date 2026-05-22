import './DiningIllustration.css';

const DiningIllustration = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 540 460"
    className="dining-illustration"
    aria-hidden="true"
  >
    <defs>
      <radialGradient id="candleGlow" cx="50%" cy="44%" r="42%">
        <stop offset="0%"  stopColor="#d4af37" stopOpacity="0.09" />
        <stop offset="100%" stopColor="#080808" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="flameGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%"  stopColor="rgba(255,210,60,0.55)" />
        <stop offset="100%" stopColor="rgba(255,150,0,0)" />
      </radialGradient>
    </defs>

    {/* ── Fondo ── */}
    <rect width="540" height="460" fill="#080808" />
    <rect width="540" height="460" fill="url(#candleGlow)" />

    {/* ── Marco decorativo ── */}
    <rect x="14" y="14" width="512" height="432" fill="none"
          stroke="#d4af37" strokeWidth="0.6" opacity="0.22" />

    {/* Esquinas */}
    {[
      "M14 48 L14 14 L48 14",
      "M492 14 L526 14 L526 48",
      "M14 412 L14 446 L48 446",
      "M492 446 L526 446 L526 412",
    ].map((d, i) => (
      <path key={i} d={d} fill="none" stroke="#d4af37" strokeWidth="1.4" opacity="0.5" />
    ))}

    {/* ── CANDELABRO CENTRAL ── */}
    {/* Base */}
    <ellipse cx="270" cy="355" rx="24" ry="6"
             fill="#111" stroke="#d4af37" strokeWidth="1.2" opacity="0.75" />
    {/* Fuste central */}
    <path d="M267 349 L267 290 Q267 282 270 278 Q273 282 273 290 L273 349"
          fill="#1a1507" stroke="#d4af37" strokeWidth="1" opacity="0.8" />
    {/* Nódulo decorativo */}
    <ellipse cx="270" cy="310" rx="7" ry="4"
             fill="#1a1507" stroke="#d4af37" strokeWidth="1" opacity="0.7" />
    {/* Brazo izquierdo */}
    <path d="M265 298 Q238 290 232 275"
          fill="none" stroke="#d4af37" strokeWidth="1.3" opacity="0.7" />
    {/* Brazo derecho */}
    <path d="M275 298 Q302 290 308 275"
          fill="none" stroke="#d4af37" strokeWidth="1.3" opacity="0.7" />
    {/* Vasos portavelas */}
    {[[224,270],[263,268],[300,270]].map(([cx,cy],i) => (
      <g key={i}>
        <path d={`M${cx-7} ${cy+10} Q${cx-9} ${cy} ${cx-6} ${cy-5} L${cx+6} ${cy-5} Q${cx+9} ${cy} ${cx+7} ${cy+10} Z`}
              fill="#1a1507" stroke="#d4af37" strokeWidth="0.9" opacity="0.75" />
      </g>
    ))}
    {/* Velas */}
    {[[224,215],[270,210],[308,215]].map(([cx,cy],i) => (
      <rect key={i} x={cx-5} y={cy} width="10" height={cy===210?58:54}
            fill="#f9f6ec" stroke="#d4af37" strokeWidth="0.4" rx="1" opacity="0.88" />
    ))}
    {/* Resplandores de llama */}
    {[[224,210],[270,205],[308,210]].map(([cx,cy],i) => (
      <ellipse key={i} cx={cx} cy={cy} rx="9" ry="14"
               fill={`url(#flameGlow)`} opacity="0.6" />
    ))}
    {/* Llamas */}
    {[[224,208],[270,203],[308,208]].map(([cx,cy],i) => (
      <g key={i}>
        <path d={`M${cx-4} ${cy+4} Q${cx-2} ${cy-8} ${cx} ${cy-13} Q${cx+2} ${cy-8} ${cx+4} ${cy+4} Q${cx} ${cy+8} ${cx-4} ${cy+4} Z`}
              fill="rgba(255,210,60,0.9)" />
        <path d={`M${cx-2} ${cy+3} Q${cx} ${cy-5} ${cx+2} ${cy+3} Q${cx} ${cy+6} ${cx-2} ${cy+3} Z`}
              fill="rgba(255,255,200,0.95)" />
      </g>
    ))}

    {/* ── COPA DE VINO IZQUIERDA ── */}
    <g opacity="0.88">
      <path d="M88 155 Q76 205 93 238 L133 238 Q150 205 138 155 Z"
            fill="rgba(212,175,55,0.04)" stroke="#d4af37" strokeWidth="1.1" />
      {/* Vino tinto */}
      <path d="M86 185 Q80 210 93 232 L130 232 Q143 210 136 185 Z"
            fill="rgba(120,0,0,0.28)" stroke="none" />
      {/* Reflejos del cristal */}
      <path d="M94 163 Q91 175 93 190" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
      <line x1="113" y1="238" x2="113" y2="300" stroke="#d4af37" strokeWidth="0.9" />
      <path d="M90 300 Q113 308 136 300" stroke="#d4af37" strokeWidth="1.4" fill="none" />
    </g>

    {/* ── COPA DE VINO DERECHA ── */}
    <g opacity="0.88">
      <path d="M402 155 Q390 205 407 238 L447 238 Q464 205 452 155 Z"
            fill="rgba(212,175,55,0.04)" stroke="#d4af37" strokeWidth="1.1" />
      {/* Vino blanco */}
      <path d="M404 190 Q399 215 408 232 L443 232 Q452 215 448 190 Z"
            fill="rgba(212,175,55,0.13)" stroke="none" />
      <path d="M408 163 Q405 175 407 190" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
      <line x1="427" y1="238" x2="427" y2="300" stroke="#d4af37" strokeWidth="0.9" />
      <path d="M404 300 Q427 308 450 300" stroke="#d4af37" strokeWidth="1.4" fill="none" />
    </g>

    {/* ── PLATO PRINCIPAL ── */}
    <g transform="translate(270,390)">
      <ellipse cx="0" cy="0" rx="82" ry="21"
               fill="#111" stroke="#d4af37" strokeWidth="1.3" opacity="0.7" />
      <ellipse cx="0" cy="-1" rx="65" ry="16"
               fill="none" stroke="#d4af37" strokeWidth="0.5" opacity="0.35" />
      {/* Arte del plato — manchas abstractas elegantes */}
      <circle cx="-22" cy="-2" r="11" fill="#5C3317" opacity="0.65" />
      <circle cx="-5"  cy="-4" r="7"  fill="#8B6914" opacity="0.6" />
      <circle cx="13"  cy="-2" r="5"  fill="#4A7C59" opacity="0.6" />
      <circle cx="26"  cy="1"  r="3"  fill="#d4af37" opacity="0.5" />
      {/* Pincelada de salsa */}
      <path d="M-42 5 Q-15 -10 18 5" fill="none" stroke="#7B3F00" strokeWidth="1.8" opacity="0.5" />
    </g>

    {/* ── TENEDOR ── */}
    <g transform="translate(173,355)" stroke="#b8b8b8" strokeWidth="1.1"
       fill="none" opacity="0.55">
      <line x1="0" y1="0" x2="0" y2="65" />
      <path d="M-5 0 L-5 22 M0 0 L0 22 M5 0 L5 22" />
      <path d="M-5 22 Q0 30 5 22" />
    </g>

    {/* ── CUCHILLO ── */}
    <g transform="translate(370,355)" stroke="#b8b8b8" strokeWidth="1.1"
       fill="none" opacity="0.55">
      <line x1="0" y1="0" x2="0" y2="65" />
      <path d="M0 0 Q8 18 0 32" fill="rgba(185,185,185,0.12)" stroke="#b8b8b8" strokeWidth="0.7" />
    </g>

    {/* ── RAMA DE OLIVO IZQUIERDA ── */}
    <g transform="translate(42,240)" stroke="#5B6B38" strokeWidth="1"
       fill="none" opacity="0.65">
      <path d="M28 90 Q14 55 18 25 Q22 5 28 -8" />
      <path d="M20 65 Q4 52 7 40" />
      <path d="M17 44 Q2 30 6 18" />
      <path d="M20 26 Q8 12 14 4" />
      <ellipse cx="5" cy="41" rx="10" ry="4.5" fill="rgba(91,107,56,0.32)" transform="rotate(-38,5,41)" />
      <ellipse cx="4" cy="19" rx="9"  ry="4"   fill="rgba(91,107,56,0.32)" transform="rotate(-28,4,19)" />
      <ellipse cx="12" cy="4" rx="8"  ry="3.5" fill="rgba(91,107,56,0.32)" transform="rotate(-18,12,4)" />
      <circle cx="3" cy="42" r="2.5" fill="rgba(40,65,25,0.55)" stroke="rgba(91,107,56,0.7)" strokeWidth="0.5" />
    </g>

    {/* ── RAMA DE OLIVO DERECHA ── */}
    <g transform="translate(470,240)" stroke="#5B6B38" strokeWidth="1"
       fill="none" opacity="0.65">
      <path d="M0 90 Q14 55 10 25 Q6 5 0 -8" />
      <path d="M8 65 Q24 52 21 40" />
      <path d="M11 44 Q26 30 22 18" />
      <path d="M8 26 Q20 12 14 4" />
      <ellipse cx="23" cy="41" rx="10" ry="4.5" fill="rgba(91,107,56,0.32)" transform="rotate(38,23,41)" />
      <ellipse cx="24" cy="19" rx="9"  ry="4"   fill="rgba(91,107,56,0.32)" transform="rotate(28,24,19)" />
      <ellipse cx="16" cy="4"  rx="8"  ry="3.5" fill="rgba(91,107,56,0.32)" transform="rotate(18,16,4)" />
      <circle cx="25" cy="42" r="2.5" fill="rgba(40,65,25,0.55)" stroke="rgba(91,107,56,0.7)" strokeWidth="0.5" />
    </g>

    {/* ── DIVISOR CON DIAMANTE ── */}
    <g transform="translate(270,118)" opacity="0.45">
      <line x1="-68" y1="0" x2="-12" y2="0" stroke="#d4af37" strokeWidth="0.7" />
      <path d="M0 -5 L6 0 L0 5 L-6 0 Z" fill="#d4af37" />
      <line x1="12" y1="0" x2="68" y2="0" stroke="#d4af37" strokeWidth="0.7" />
    </g>

    {/* ── TEXTO DECORATIVO ── */}
    <text x="270" y="110" textAnchor="middle"
          fontFamily="Cinzel, serif" fontSize="9.5"
          fill="#d4af37" letterSpacing="6" opacity="0.45">
      CUCINA · ARTIGIANALE · ITALIANA
    </text>

    {/* ── SUPERFICIE DE MESA ── */}
    <ellipse cx="270" cy="420" rx="210" ry="30"
             fill="none" stroke="#d4af37" strokeWidth="0.6" opacity="0.15" />
  </svg>
);

export default DiningIllustration;
