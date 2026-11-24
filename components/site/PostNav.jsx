import Link from "next/link";

/**
 * The "read next" row under a story. Each link is `{ href, label, title }`.
 */
export default function PostNav({ links, label = "More news" }) {
  return (
    <nav className="post-nav" aria-label={label}>
      {links.map(({ href, label: kicker, title }) => (
        <Link key={href} href={href}>
          <span className="post-nav-label">{kicker}</span>
          <span className="post-nav-title">{title}</span>
        </Link>
      ))}
    </nav>
  );
}
