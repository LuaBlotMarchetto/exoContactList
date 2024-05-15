export function Header(): JSX.Element {
  return (
    <div className="container container--header">
      <div>
        <h1>Contact List</h1>
      </div>
      <div className="container container--right">
        <a className="container__elements">Pricing</a>
        <a className="container__elements">Product</a>
        <a className="container__elements">Features</a>
        <a className="container__elements">Marketplace</a>
      </div>
    </div>
  );
}
