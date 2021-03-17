import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with <img src='/netliheart.svg' alt='Netlify Logo' className={styles.logo} /> for you
      </footer>

      <script
        dangerouslySetInnerHTML={{
          __html: `
    (function(d, w, c) {
        w.ChatraID = '4MqPoSYc6Ah9ZGyKt';
        var s = d.createElement('script');
        w[c] = w[c] || function() {
            (w[c].q = w[c].q || []).push(arguments);
        };
        s.async = true;
        s.src = 'https://call.chatra.io/chatra.js';
        if (d.head) d.head.appendChild(s);
    })(document, window, 'Chatra');
          `,
        }}
      ></script>
    </>
  )
}
