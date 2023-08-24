const DEVELOPER_INFO = {
  NAME: "해삼스무디",
  LINK: "https://twitter.com/plave_smoothie",
};

const Footer = () => {
  return (
    <footer className="flex justify-center items-center w-full h-20 gap-2.5">
      <a
        className="text-gray text-xs hover:text-secondary-500"
        href={DEVELOPER_INFO.LINK}
        target="_blank"
      >{`Developed By. ${DEVELOPER_INFO.NAME}`}</a>
    </footer>
  );
};

export default Footer;
