const Footer = () => {
  const newDate = new Date().getFullYear()

  return (
    <footer className="footer footer-center p-4 bg-red-600 text-base-content text-white">
      <aside>
        <p>Copyright © {newDate} - All right reserved by ACME Industries Ltd</p>
      </aside>
    </footer>
  );
};

export default Footer;
