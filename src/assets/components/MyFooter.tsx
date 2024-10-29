const MyFooter = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} DVD-TECH</p>

      <div className="social-media">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://th.bing.com/th/id/R.4073836f2fdb4bcd7ec76a1ff2f08886?rik=nSKRykqkPd%2bZ7g&pid=ImgRaw&r=0"
            alt="Facebook"
          />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://th.bing.com/th/id/R.e2c49984cd065086d129d610e2dcefd3?rik=TwL2S%2f38ep35YA&pid=ImgRaw&r=0"
            alt="Instagram"
          />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img00.deviantart.net/1e7c/i/2011/299/1/8/halloween_twitter_icon_by_dev_john-d4dzxiz.jpg" />
        </a>
      </div>
    </footer>
  );
};

export default MyFooter;
