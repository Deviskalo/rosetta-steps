import Link from "next/link";
import Icon from "./Icon";

/**
 * Row of call-to-action buttons. Each action is
 * `{ href, label, variant, arrow, external }`.
 */
export default function ActionGroup({ actions, className = "btn-group" }) {
  return (
    <div className={className}>
      {actions.map(({ href, label, variant = "light", arrow = false, external = false }) => {
        const content = arrow ? <>{`${label} `}<Icon name="arrowRight" /></> : label;
        const classes = `btn btn--${variant}`;
        const key = `${href}-${label}`;
        return external ? (
          <a key={key} className={classes} href={href}>{content}</a>
        ) : (
          <Link key={key} className={classes} href={href}>{content}</Link>
        );
      })}
    </div>
  );
}
