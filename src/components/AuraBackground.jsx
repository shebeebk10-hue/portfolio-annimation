// Soft, slow-drifting gradient orbs that live behind the whole page.
// Purely decorative, fixed position, never intercepts clicks/scroll.
export default function AuraBackground() {
  return (
    <div className="aura-bg" aria-hidden="true">
      <span className="aura-orb aura-orb-1" />
      <span className="aura-orb aura-orb-2" />
      <span className="aura-orb aura-orb-3" />
    </div>
  );
}
