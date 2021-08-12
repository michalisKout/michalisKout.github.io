import PrimaryLink from '../Shared/PrimaryLink';

const Footer = () => (
  <footer className="footer">
    <div className="container py-6">
      <hr className="breaking-line" />

      <div className="footer--menu">
        <PrimaryLink text={'michalis.koutridis@gmail.com'} />

        <div className="footer--menu-wrapper">
          Made with{' '}
          <a href="https://nextjs.org/" target="_blank" rel="nofollow">
            {' '}
            next js{' '}
          </a>
          ,
          <a href="https://www.typescriptlang.org/" target="_blank" rel="nofollow">
            {' '}
            typescript{' '}
          </a>
          ,
          <a href="https://tailwindcss.com/" target="_blank" rel="nofollow">
            {' '}
            tailwindcss{' '}
          </a>
          ,
          <a href="https://undraw.co/" target="_blank" rel="nofollow">
            {' '}
            undraw illustrations{' '}
          </a>
          ,
          <a href="https://www.contentful.com/" target="_blank" rel="nofollow">
            {' '}
            contentful
          </a>{' '}
          and
          <a href="https://merakiui.com/" target="_blank" rel="nofollow">
            {' '}
            merakiui{' '}
          </a>
          .
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
