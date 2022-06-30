const Menu = ({ items = [] }) => {
  return (
    <ul className="list-none hidden lg:flex gap-x-12">
      {items.map((item) => (
        <li key={item.name}>
          <a className="cursor-pointer no-underline text-sm font-medium hover:opacity-75 transition-colors select-none">
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
