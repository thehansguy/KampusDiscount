const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <>
      <div id="footer" className="p-4 bg-light">
        <div className="container text-center">
          <p>
            &copy; {date} Issaaf Kattan React Land Page Template. Design by{' '}
            <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
