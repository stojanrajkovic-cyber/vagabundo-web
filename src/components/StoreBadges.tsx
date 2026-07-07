/**
 * Zajednički par App Store / Google Play bedžova — korišten na svim
 * stranicama koje su ranije imale samo App Store dugme. Kad pravi Play
 * Store link bude spreman (nakon objave app-a), zamijeni SAMO
 * `PLAY_STORE_URL` ispod — ne treba dirati 6 stranica pojedinačno.
 */

const APP_STORE_URL = "https://apps.apple.com/ba/app/vagabundo/id6754535676";

// TODO: zamijeni pravim Play Store URL-om kad app bude objavljen
// (https://play.google.com/store/apps/details?id=com.stojanrajkovic.vagabundo)
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.stojanrajkovic.vagabundo";

export default function StoreBadges() {
  return (
    <>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center"
      >
        <img
          src="/appstore-badge.svg"
          alt="Download on the App Store"
          className="h-14 w-auto"
        />
      </a>

      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center"
      >
        <img
          src="/playstore-badge.svg"
          alt="Get it on Google Play"
          className="h-14 w-auto"
        />
      </a>
    </>
  );
}
