type Screen = 'mobile' | 'tablet' | 'laptop' | 'desktop';
export const breakPoints: Record<Screen, string> = {
  mobile: '400px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1280px',
};

const theme = {
  colors: {},
  width: breakPoints,
  minWidth: breakPoints,
  maxWidth: breakPoints,
  minHeight: breakPoints,
  maxHeight: breakPoints,
  screens: breakPoints,
} as const;

export default theme;
