import Link from "next/link";

const SHAPES = {
  page: [
    { kind: "dots", style: { width: 130, height: 130, right: "8%", top: "18%" } },
    { kind: "ring", style: { width: 190, height: 190, right: "16%", bottom: "8%" } },
    { kind: "spark", style: { left: "46%", top: "22%" } }
  ],
  article: [
    { kind: "dots", style: { width: 120, height: 120, right: "7%", top: "16%" } },
    { kind: "ring", style: { width: 170, height: 170, right: "15%", bottom: "10%" } }
  ]
};

/**
 * Inner-page masthead. `crumbs` are `{ label, href }` entries after "Home";
 * the last one is rendered as the current page. `children` receive the lede
 * paragraph or the article meta row.
 */
export default function PageHero({
  eyebrow,
  title,
  crumbs,
  children,
  article = false,
  reveal = true,
  ids = {}
}) {
  return (
    <section className={article ? "page-hero page-hero--article" : "page-hero"}>
      {SHAPES[article ? "article" : "page"].map(({ kind, style }) => (
        <div key={kind} className={`shape shape--${kind}`} style={style} aria-hidden="true" />
      ))}
      <div className="container">
        <div className="page-hero-inner" {...(reveal ? { "data-reveal": true } : {})}>
          <ol className="breadcrumb">
            <li><Link href="/">Home</Link></li>
            {crumbs.map(({ label, href }, index) =>
              index === crumbs.length - 1 ? (
                <li key={label} aria-current="page" {...(ids.crumb ? { id: ids.crumb } : {})}>
                  {label}
                </li>
              ) : (
                <li key={label}>
                  <Link href={href}>{label}</Link>
                </li>
              )
            )}
          </ol>
          <p className="eyebrow" {...(ids.eyebrow ? { id: ids.eyebrow } : {})}>{eyebrow}</p>
          <h1 {...(ids.title ? { id: ids.title } : {})}>{title}</h1>
          {children}
        </div>
      </div>
    </section>
  );
}
