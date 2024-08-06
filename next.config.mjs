import { withHydrationOverlay } from '@builder.io/react-hydration-overlay/next';

/** @type {import('next').NextConfig} */
const nextConfig = {};

// Check if the environment is development
const isDev = process.env.NODE_ENV === 'development';

// Apply the hydration overlay only in development mode
const config = isDev
  ? withHydrationOverlay({ appRootSelector: 'main' })(nextConfig)
  : nextConfig;

export default config;
