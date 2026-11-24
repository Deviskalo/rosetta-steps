import Icon from "./Icon";

/**
 * The impact stats band. Each stat is
 * `{ icon, value, count, label }`; omit `count` for values that are not counted up.
 */
export default function StatsSection({ label, stats, style }) {
  return (
    <section className="stats" style={style} aria-label={label}>
      <div className="container">
        <div className="stats-card" data-reveal="scale">
          {stats.map(({ icon, value, count, label: statLabel }) => (
            <div className="stat" key={statLabel}>
              <div className="stat-icon"><Icon name={icon} /></div>
              <div className="stat-num">
                <span {...(count !== undefined ? { "data-count": count } : {})}>{value}</span>
              </div>
              <span className="stat-label">{statLabel}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
