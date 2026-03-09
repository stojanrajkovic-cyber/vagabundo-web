import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/privacy-policy',
        destination: '/privacy',
        permanent: true
      },
      {
        source: '/terms-of-service-tos',
        destination: '/terms',
        permanent: true
      },
      {
      source: '/ai-content-disclaimer',
      destination: '/terms',
      permanent: true
      }
    ];
  }
};

export default withNextIntl(nextConfig);

