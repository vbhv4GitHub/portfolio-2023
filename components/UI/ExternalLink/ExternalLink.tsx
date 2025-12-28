type Props = { link: string; text: string };

const ExternalLink = ({ link, text }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="inline-block px-4 py-2 text-white transition-colors duration-300 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      {text}
    </a>
  );
};

export default ExternalLink;
