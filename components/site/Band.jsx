import ActionGroup from "./ActionGroup";

export default function Band({ eyebrow, title, children, actions, chips }) {
  return (
    <section className="section section--cream">
      <div className="container">
        <div className="band" data-reveal="scale">
          <div className="band-grid">
            <div>
              <p className="eyebrow eyebrow--light">{eyebrow}</p>
              <h2>{title}</h2>
              {children}
              {actions ? <ActionGroup actions={actions} className="band-actions" /> : null}
            </div>
            <div className="impact-chips">
              {chips.map(({ value, label }) => (
                <div className="impact-chip" key={label}>
                  <b>{value}</b>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
