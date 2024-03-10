interface ButtonLinkProps {
  hrefLink: string;
  title: string;
}

export function ButtonLink({ hrefLink, title }: ButtonLinkProps) {
  return (
    <a
      href={hrefLink}
      className="flex items-center justify-center bg-white text-orange text-2xl font-light h-14 rounded-xl shadow-md"
    >
      {title}
    </a>
  );
}
