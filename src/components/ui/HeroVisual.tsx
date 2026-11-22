interface HeroVisualProps {
  readonly className?: string;
}

export function HeroVisual({ className }: HeroVisualProps) {
  return (
    <div
      aria-hidden="true"
      className={`group relative flex aspect-[4/3] w-full max-w-md items-center justify-center sm:aspect-square lg:aspect-[4/5] ${
        className ?? ""
      }`}
    >
      {/* ---------------------------------------------------------------------- */}
      {/* Layer 0: Ambient Radial Warmth Glow (Light & Dark Theme Aware)         */}
      {/* ---------------------------------------------------------------------- */}
      <div className="pointer-events-none absolute inset-4 -z-10 rounded-full bg-gradient-to-tr from-accent/20 via-surface-soft/40 to-transparent blur-3xl opacity-70 transition-opacity duration-700 ease-out group-hover:opacity-95 dark:opacity-45 dark:group-hover:opacity-75" />

      {/* ---------------------------------------------------------------------- */}
      {/* Layer 1: Framing Stage with CSS 3D Perspective & Subtle Hover Depth    */}
      {/* ---------------------------------------------------------------------- */}
      <div className="relative flex h-full w-full items-center justify-center rounded-3xl border border-border/60 bg-surface/40 p-6 shadow-md backdrop-blur-xs transition-all duration-700 ease-out group-hover:border-border group-hover:shadow-xl sm:p-8 dark:bg-surface/30">
        {/* Subtle Inner Framing Gradient */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-radial from-transparent via-transparent to-surface-soft/10" />

        {/* ------------------------------------------------------------------ */}
        {/* Layer 2: Artisanal Ceramic Coffee Cup Composition (Vector SVG)     */}
        {/* ------------------------------------------------------------------ */}
        <svg
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative h-auto w-full max-w-[280px] drop-shadow-md transition-transform duration-700 ease-out transform-gpu group-hover:-translate-y-1 group-hover:scale-[1.02] sm:max-w-[330px] lg:max-w-[360px] motion-reduce:transform-none"
        >
          <defs>
            {/* Ceramic Saucer Surface Gradient */}
            <linearGradient id="saucerPlateGrad" x1="100" y1="280" x2="300" y2="350" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="var(--color-surface)" />
              <stop offset="50%" stopColor="var(--color-surface)" />
              <stop offset="100%" stopColor="var(--color-surface-soft)" />
            </linearGradient>

            {/* Ceramic Cup Outer Body Gradient (Refined Matte Glaze) */}
            <linearGradient id="ceramicCupBody" x1="100" y1="160" x2="300" y2="300" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="var(--color-surface)" />
              <stop offset="45%" stopColor="var(--color-surface)" />
              <stop offset="85%" stopColor="var(--color-surface-soft)" />
              <stop offset="100%" stopColor="var(--color-border)" />
            </linearGradient>

            {/* Cup Rim Highlight Gradient */}
            <linearGradient id="ceramicRimGrad" x1="90" y1="160" x2="310" y2="160" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="var(--color-surface-soft)" />
              <stop offset="50%" stopColor="var(--color-surface)" />
              <stop offset="100%" stopColor="var(--color-surface-soft)" />
            </linearGradient>

            {/* Rich Espresso Crema Gradient (Velvety Hazelnut & Caramel) */}
            <radialGradient id="espressoCremaGrad" cx="200" cy="166" r="100" fx="185" fy="160" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#C88846" />
              <stop offset="40%" stopColor="#A46430" />
              <stop offset="75%" stopColor="#78401C" />
              <stop offset="100%" stopColor="#4A220C" />
            </radialGradient>

            {/* Steamed Milk Foam / Latte Art Rosette Gradient */}
            <linearGradient id="latteArtFoam" x1="180" y1="145" x2="220" y2="185" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="60%" stopColor="#F8EDE1" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#DDB58E" stopOpacity="0.75" />
            </linearGradient>

            {/* Refined Warm Ambient Component Drop Shadow Filter */}
            <filter id="softContactShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#2B201B" floodOpacity="0.12" />
            </filter>
          </defs>

          {/* ---------------------------------------------------------------- */}
          {/* Layered Tabletop Grounding Shadow System (Warm-Toned Multi-Tier) */}
          {/* ---------------------------------------------------------------- */}

          {/* Tier 3: Broad Soft Ambient Falloff (Warm Roasted Cacao Tint) */}
          <ellipse
            cx="200"
            cy="338"
            rx="164"
            ry="25"
            className="fill-[#5C381E]/12 blur-[8px] dark:fill-black/35"
          />

          {/* Tier 2: Mid-Range Ambient Grounding Shadow (Warm Umber Tone) */}
          <ellipse
            cx="200"
            cy="332"
            rx="138"
            ry="19"
            className="fill-[#3E2718]/18 blur-[4px] dark:fill-black/50"
          />

          {/* Tier 1: Tight Tabletop Contact Crevice (Deep Warm Espresso Core) */}
          <ellipse
            cx="200"
            cy="326"
            rx="108"
            ry="11"
            className="fill-[#2B201B]/28 blur-[1.5px] dark:fill-black/70"
          />

          {/* 2. Ceramic Saucer */}
          <g filter="url(#softContactShadow)">
            {/* Saucer Outer Body */}
            <ellipse
              cx="200"
              cy="318"
              rx="140"
              ry="32"
              fill="url(#saucerPlateGrad)"
              stroke="var(--color-border)"
              strokeWidth="1.5"
            />
            {/* Saucer Inner Recess Ring */}
            <ellipse
              cx="200"
              cy="316"
              rx="90"
              ry="20"
              fill="none"
              stroke="var(--color-border)"
              strokeWidth="1"
              strokeDasharray="4 2"
              opacity="0.6"
            />
          </g>

          {/* 3. Ceramic Cup Handle */}
          <path
            d="M 292 186 C 362 192, 362 264, 276 268"
            fill="none"
            stroke="url(#ceramicCupBody)"
            strokeWidth="18"
            strokeLinecap="round"
          />
          <path
            d="M 292 186 C 352 192, 352 260, 280 264"
            fill="none"
            stroke="var(--color-border)"
            strokeWidth="2"
            opacity="0.4"
          />

          {/* 4. Ceramic Cup Body (Matte Tapered Cylinder) */}
          <g filter="url(#softContactShadow)">
            <path
              d="M 90 160 C 90 236, 136 296, 146 296 C 162 304, 238 304, 254 296 C 264 296, 310 236, 310 160 Z"
              fill="url(#ceramicCupBody)"
              stroke="var(--color-border)"
              strokeWidth="1.5"
            />
          </g>

          {/* 5. Cup Top Rim (Beveled Ceramic Lip) */}
          <ellipse
            cx="200"
            cy="160"
            rx="110"
            ry="36"
            fill="url(#ceramicRimGrad)"
            stroke="var(--color-border)"
            strokeWidth="1.5"
          />

          {/* 6. Liquid Coffee Pool (Fresh Velvety Crema) */}
          <ellipse
            cx="200"
            cy="166"
            rx="98"
            ry="29"
            fill="url(#espressoCremaGrad)"
          />

          {/* 7. Crema Roast Ring (Deep Caramel Roasted Boundary) */}
          <ellipse
            cx="200"
            cy="166"
            rx="96"
            ry="28"
            fill="none"
            stroke="#3B1908"
            strokeWidth="2.5"
            opacity="0.5"
          />

          {/* 8. Artisanal Latte Art Rosette / Heart Foam Silhouette */}
          <g opacity="0.95">
            {/* Central Heart Petal */}
            <path
              d="M 200 152 C 188 142, 174 154, 186 166 C 196 176, 200 182, 200 182 C 200 182, 204 176, 214 166 C 226 154, 212 142, 200 152 Z"
              fill="url(#latteArtFoam)"
            />
            {/* Supporting Radiating Foam Waves */}
            <path
              d="M 186 164 C 172 160, 168 170, 184 174"
              fill="none"
              stroke="url(#latteArtFoam)"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path
              d="M 214 164 C 228 160, 232 170, 216 174"
              fill="none"
              stroke="url(#latteArtFoam)"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path
              d="M 192 178 C 182 176, 180 184, 194 186"
              fill="none"
              stroke="url(#latteArtFoam)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M 208 178 C 218 176, 220 184, 206 186"
              fill="none"
              stroke="url(#latteArtFoam)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Center Pour Stem */}
            <line
              x1="200"
              y1="148"
              x2="200"
              y2="188"
              stroke="url(#latteArtFoam)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </g>

          {/* 9. Gentle Rising Steam Silhouette (Subtle, Non-Obtrusive) */}
          <g className="transition-opacity duration-700 motion-safe:animate-pulse">
            <path
              d="M 185 125 C 178 100, 192 78, 186 54"
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.35"
            />
            <path
              d="M 215 118 C 224 94, 208 72, 218 48"
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.45"
            />
            <path
              d="M 198 128 C 204 106, 196 86, 202 62"
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="1.75"
              strokeLinecap="round"
              opacity="0.3"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
