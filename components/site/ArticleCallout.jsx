import Link from "next/link";
import Icon from "./Icon";

/**
 * The boxed call to action inside a story. `cta` is `{ href, label }`;
 * `children` is the supporting paragraph.
 */
export default function ArticleCallout({ title, cta, children }) {
  return (
    <div className="article-callout">
      <h3>{title}</h3>
      <p>{children}</p>
      <p>
        <Link className="btn btn--primary btn--sm" href={cta.href}>
          {`${cta.label} `}
          <Icon name="arrowRight" />
        </Link>
      </p>
    </div>
  );
}
