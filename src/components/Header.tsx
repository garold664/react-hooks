import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/use-memo">UseMemo</Link>
          </li>
          <li>
            <Link to="/use-ref">UseRef</Link>
          </li>
          <li>
            <Link to="/use-context">UseContext</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
