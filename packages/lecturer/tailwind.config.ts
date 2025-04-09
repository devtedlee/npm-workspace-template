import type { Config } from 'tailwindcss';

const px0_1000: Record<number, string> = {
  ...Array.from({ length: 1001 }).map((_, i) => `${i}px`),
};

export const screens = {
  mobile: '360px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1280px',
  wide: '1536px',
  'mobile-only': { max: '767px' },
  'tablet-only': { min: '768px', max: '1023px' },
  'mobile-tablet': { max: '1023px' },
} as const;

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens,
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      white: '#fff',
      black: '#09090a',
      highlight: {
        lightest: '#e5f3ff',
        light: '#6fb8ff',
        DEFAULT: '#0088ff',
        dark: '#0261bf',
      },
      brand: 'rgb(var(--brand-color) / <alpha-value>)',
      purple: {
        100: '#f6f2ff',
        200: '#e5dbff',
        300: '#c1abff',
        400: '#936bff',
        500: '#6436e2',
        600: '#4c29ab',
      },
      red: {
        100: '#fff2f4',
        200: '#ffdbdf',
        300: '#faafb7',
        400: '#fa7d8a',
        500: '#fa2e43',
        600: '#df072e',
      },
      violet: {
        100: '#fff2f9',
        200: '#ffdbed',
        300: '#ffa8d4',
        400: '#e3599e',
        500: '#c42173',
        600: '#911855',
      },
      blue: {
        100: '#f2f2ff',
        200: '#dbdbff',
        300: '#b8b8ff',
        400: '#8f8ff7',
        500: '#6060e9',
        600: '#4a4ab5',
      },
      green: {
        100: '#e8fae9',
        200: '#d4fad6',
        300: '#99f799',
        400: '#6ce06c',
        500: '#3bd23c',
        600: '#31b032',
      },
      orange: {
        100: '#fff8f2',
        200: '#ffe5cf',
        300: '#ffd6b3',
        400: '#ffb777',
        500: '#ffa352',
        600: '#e7832c',
      },
      neutral: {
        100: '#f7f8fa',
        200: '#d3d7e1',
        300: '#b9beca',
        400: '#9fa5b4',
        500: '#868c9e',
        600: '#6c7387',
        700: '#525a71',
        800: '#38415a',
        900: '#1e2844',
      },
      gray: {
        100: '#fafafa',
        200: '#f2f3f5',
        300: '#ebebeb',
        400: '#e0e0e0',
        500: '#c8c8c8',
        600: '#888',
        700: '#555',
        800: '#20222d',
        900: '#13151b',
      },
    },
    fontSize: {
      inherit: 'inherit',
      '2xs': '10px',
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': ['32px', '42px'],
      '4xl': ['40px', '54px'],
      '5xl': ['48px', '62px'],
      '6xl': ['64px', '82px'],
    },
    fontFamily: {
      sans: ['Pretendard', 'Malgun Gothic', 'sans-serif'],
    },
    fontWeight: {
      normal: '400',
      bold: '700',
    },
    letterSpacing: {
      tight: '-0.2px',
      normal: '0',
    },
    borderRadius: {
      none: '0',
      sm: '4px',
      md: '8px',
      lg: '12px',
      xl: '20px',
      '2xl': '32px',
      full: '9999px',
    },
    boxShadow: {
      none: 'none',
      sm: '0 1px 6px 0 rgba(0, 0, 0, 0.11)',
      md: '0 8px 20px 0 rgba(0, 0, 0, 0.08)',
      lg: '0 4px 40px 0 rgba(0, 0, 0, 0.1)',
    },
    extend: {
      minWidth: px0_1000,
      maxWidth: px0_1000,
      minHeight: px0_1000,
      borderWidth: px0_1000,
      spacing: {
        ...px0_1000,
        sm: '16px',
        md: '20px',
        lg: '24px',
      },
      aspectRatio: {
        article: '4 / 3',
      },
      zIndex: {
        modal: '1000',
        'modal-under': '990',
        header: '900',
        gnb: '890',
        'side-modal': '800',
        toolbar: '790',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInOut: {
          '0%, 100%': { opacity: '0' },
          '80%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-50%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(50%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.4s ease-in-out forwards',
        fadeInOut: 'fadeInOut 3s infinite',
        slideRight: 'slideRight 0.4s ease-in-out forwards',
        slideLeft: 'slideLeft 0.4s ease-in-out forwards',
        fadeOut: 'fadeOut 5s ease-in-out',
      },
      transitionProperty: {
        line: 'border, box-shadow',
      },
    },
  },
  plugins: [],
};

export default config;
