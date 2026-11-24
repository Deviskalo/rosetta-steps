import ActionGroup from "./ActionGroup";

export default function CtaStrip({ title, lede, actions, className = "section section--flush-top" }) {
  return (
    <section className={className}>
      <div className="container">
        <div className="cta-strip" data-reveal="scale">
          <div>
            <h2>{title}</h2>
            <p>{lede}</p>
          </div>
          <ActionGroup actions={actions} />
        </div>
      </div>
    </section>
  );
}
