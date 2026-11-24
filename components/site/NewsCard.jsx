import Link from "next/link";
import { asset } from "../../lib/asset";
import Icon from "./Icon";

/**
 * A news teaser. `mode="teaser"` is the home-page card that links to the news
 * index as a whole; `mode="archive"` is the filterable card on /news/.
 */
export default function NewsCard({
  href,
  image,
  alt,
  category,
  categoryKey,
  date,
  title,
  excerpt,
  mode = "archive",
  search,
  delay = 0
}) {
  const body = (
    <>
      <div className="news-thumb">
        <img src={asset(image)} alt={alt} loading="lazy" decoding="async" width={1200} height={900} />
      </div>
      <div className="news-body">
        <div className="news-meta"><span className="cat">{category}</span><span>{date}</span></div>
        <h3>{title}</h3>
        <p>{excerpt}</p>
        {mode === "teaser" ? (
          <span className="link-arrow">Read the story <Icon name="arrowRight" /></span>
        ) : (
          <p className="news-read">
            <Link className="link-arrow" href={href}>Read story <Icon name="arrowRight" /></Link>
          </p>
        )}
      </div>
    </>
  );

  if (mode === "teaser") {
    return (
      <Link className="news-card" href="/news/" data-reveal data-delay={delay}>
        {body}
      </Link>
    );
  }

  return (
    <article className="news-card" data-category={categoryKey} data-search={search} data-reveal data-delay={delay}>
      {body}
    </article>
  );
}
