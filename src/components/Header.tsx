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
            <Link to="/use-ref2">UseRef with callback function</Link>
          </li>
          <li>
            <Link to="/use-context">UseContext</Link>
          </li>
          <li>
            <Link to="/class-based-component">ClassBasedComponent</Link>
          </li>
          <li>
            <Link to="/custom-hook">Custom Hook</Link>
          </li>
          <li>
            <Link to="/use-layout-effect">UseLayoutEffect</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
