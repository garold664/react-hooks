import { useRef, useState } from 'react';

export default function UseRef2Page() {
  const itemsRef = useRef(null);
  const [catList, setCatList] = useState(setupCatList);

  return (
    <>
      <nav>
        <button>Tom</button>
        <button>Maru</button>
        <button>Jellylorum</button>
      </nav>
      <div>
        <ul>
          {catList.map((cat) => (
            <li key={cat}>
              <img src={cat} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function setupCatList() {
  const catList = [];
  for (let i = 0; i < 10; i++) {
    catList.push('https://loremflickr.com/320/240/cat?lock=' + i);
  }

  return catList;
}
