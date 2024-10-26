import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 bg-gray-800">
      <div className="container mx-auto text-center">
        <p className="text-gray-300">
          © {currentYear}{' '}
          <Link href="/" className="text-white transition-colors duration-300 hover:text-gray-400">
            vbhv4WebDev™
          </Link>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
