export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-left">
        <a className="brand" href="/">
          <img
            src="https://res.cloudinary.com/du9aympvd/image/upload/v1666387382/code/typescript/vite/vite-typescript-computer-shop/logo/ANDGOLOGO_l8f6nw.webp"
            style={{ borderRadius: "90%" }}
            alt="LOGO"
            width="100%"
            height={30}
            loading="lazy"
          />
        </a>

        {/*>>>> TABS START <<<<*/}
        <div className="tabs">
          <a className="active" href="/">
            Home
          </a>
          <a href="/shop">Shop</a>
        </div>
        {/*>>>> TABS END <<<<*/}
        <a className="brand">🛒</a>
      </div>
    </nav>
  );
}
