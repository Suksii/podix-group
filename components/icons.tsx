import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function ParquetIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="8" height="5" rx="1" />
      <rect x="13" y="4" width="8" height="5" rx="1" />
      <rect x="3" y="11" width="8" height="5" rx="1" />
      <rect x="13" y="11" width="8" height="5" rx="1" />
      <rect x="7" y="18" width="10" height="2.5" rx="1" />
    </svg>
  );
}

export function LaminateIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 7h18M3 12h18M3 17h18" />
      <path d="M8 7v5M15 12v5M12 17v3" opacity="0.55" />
    </svg>
  );
}

export function VinylIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 6.5 12 3l8 3.5-8 3.5-8-3.5Z" />
      <path d="M4 12l8 3.5 8-3.5" />
      <path d="M4 17.5 12 21l8-3.5" />
    </svg>
  );
}

export function GymIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="8" height="8" rx="1.5" />
      <rect x="13" y="3" width="8" height="8" rx="1.5" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" />
      <path d="M11 7h2M7 11v2M17 11v2M11 17h2" />
    </svg>
  );
}

export function SandIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 20h18" />
      <path d="M6 20V9l5-5 3 3-8 8" />
      <path d="m11 4 6 6-4 4" />
      <path d="M14 7 9 12" opacity="0.5" />
    </svg>
  );
}

export function RulerIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="8" width="19" height="8" rx="1.5" transform="rotate(0)" />
      <path d="M7 8v3M11 8v4M15 8v3M19 8v4" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5c0 8.3 6.7 15 15 15a2 2 0 0 0 2-2v-2.3a1 1 0 0 0-.8-1l-3.2-.6a1 1 0 0 0-1 .4l-.8 1a12 12 0 0 1-5.3-5.3l1-.8a1 1 0 0 0 .4-1L10.3 4.8a1 1 0 0 0-1-.8H7a2 2 0 0 0-2 2Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="m6.3 6.3 2.5 2.5M15.2 15.2l2.5 2.5M17.7 6.3l-2.5 2.5M8.8 15.2l-2.5 2.5" opacity="0.6" />
      <circle cx="12" cy="12" r="2.4" />
    </svg>
  );
}

export function CarpetIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M7 5v14M17 5v14" opacity="0.55" />
      <path d="M10 9c1-1 3-1 4 0M10 12c1-1 3-1 4 0M10 15c1-1 3-1 4 0" />
    </svg>
  );
}

export function LevelIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 17h18" />
      <path d="M3 17c3-2 6-6 9-6s6 4 9 6" opacity="0.55" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <path d="M12 7v4" />
    </svg>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m10 8.5 5 3.5-5 3.5v-7Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function BroomIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14 3 9 8M19 7 7 19l-4-4L15 3l4 4Z" opacity="0" />
      <path d="M16 4 8 12" />
      <path d="m12 8-6 6c-1 1-1 4-1 4s3 0 4-1l6-6" />
      <path d="m5 19 2-2" />
    </svg>
  );
}
