import ActionGroup from "./ActionGroup";

export default function ArticleCta({ eyebrow, title, lede, actions }) {
  return (
    <div className="article-cta" data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{lede}</p>
      <ActionGroup actions={actions} />
    </div>
  );
}
