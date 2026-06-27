export function ErrorState({ message, onRetry }) {
  return (
    <section className="state-card" role="alert">
      <h2>Could not load products</h2>
      <p>{message}</p>
      <button type="button" onClick={onRetry}>Refresh Page</button>
    </section>
  );
}
