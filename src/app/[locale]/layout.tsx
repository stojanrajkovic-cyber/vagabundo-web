import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

export function generateStaticParams() {
  return [
    {locale: 'en'},
    {locale: 'bs'}
  ];
}
export default async function LocaleLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}