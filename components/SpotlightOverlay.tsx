type SpotlightOverlayProps = {
  /** Glow radius in px. Smaller for compact elements like skill chips, larger for project cards. */
  size?: number;
};

/**
 * Renders the mouse-following glow. Must be the first child of an element
 * that already has `relative`, `overflow-hidden`, and `group` classes, with
 * the ref + onMouseMove from useSpotlight attached to that same element.
 */
export default function SpotlightOverlay({
  size = 300,
}: SpotlightOverlayProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none"
      style={{
        background: `radial-gradient(${size}px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(143,180,154,0.16), transparent 70%)`,
      }}
    />
  );
}
