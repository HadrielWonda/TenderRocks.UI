import Link from 'next/link';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink = ({ href, children }: NavLinkProps) => (
  <Link href={href}>
    <a className="font-medium text-tender-dark hover:text-tender-light transition-colors">
      {children}
    </a>
  </Link>
);

export default NavLink;