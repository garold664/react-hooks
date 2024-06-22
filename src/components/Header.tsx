import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/use-memo">UseMemo</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
