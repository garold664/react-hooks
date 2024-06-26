import { useRef, useState } from 'react';
import { flushSync } from 'react-dom';

export default function UseRef2Page() {
  const itemsRef = useRef<Map<string, HTMLLIElement> | null>(null);
  const listRef = useRef<HTMLOListElement>(null);
  const [catList, setCatList] = useState(setupCatList);

  function scrollToCat(cat: string | HTMLElement) {
    let node = null;
    if (typeof cat === 'string') {
      const map = getMap();
      node = map.get(cat);
    } else if (cat instanceof HTMLElement) {
      node = cat;
    }
    if (!node) return;
    node.style.borderColor = 'red';
    node.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'center',
    });
    setTimeout(() => {
      node.style.borderColor = 'transparent';
    }, 1000);
  }

  function getMap() {
    if (!itemsRef.current) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }

  return (
    <>
      <button
        onClick={() => {
          {
            flushSync(() => {
              setCatList((prevState) => [
                ...prevState,
                'https://loremflickr.com/320/240/cat?lock=' + prevState.length,
              ]);
            });
            // scrollToCat(catList[catList.length - 1]); // # this won't work because flushSync updates only DOM, not the state
            if (!listRef.current || !listRef.current.lastElementChild) return;
            scrollToCat(listRef.current.lastElementChild as HTMLElement);
            // console.log(listRef.current.lastElementChild);
          }
        }}
      >
        add a new cat
      </button>
      <nav>
        <button onClick={() => scrollToCat(catList[0])}>Tom</button>
        <button onClick={() => scrollToCat(catList[5])}>Maru</button>
        <button onClick={() => scrollToCat(catList[9])}>Jellylorum</button>
      </nav>
      <div>
        <ol ref={listRef}>
          {catList.map((cat) => (
            <li
              style={{ transition: '0.6s', border: '2px solid transparent' }}
              key={cat}
              ref={(node) => {
                const map = getMap();
                if (node) {
                  map.set(cat, node);
                } else {
                  map.delete(cat);
                }
              }}
            >
              <img src={cat} />
            </li>
          ))}
        </ol>
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
