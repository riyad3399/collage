const Footer = () => {
  const newDate = new Date().getFullYear()

  return (
    <footer className="footer footer-center p-4 bg-red-500 text-base-content">
      <aside>
        <p>Copyright © {newDate} - All right reserved by ACME Industries Ltd</p>
      </aside>
    </footer>
  );
};

export default Footer;
