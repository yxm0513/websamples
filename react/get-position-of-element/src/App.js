import React, { useEffect, useRef, useState } from "react";

function App() {
  const elementRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleResize() {
      const x = elementRef.current.offsetLeft;
      const y = elementRef.current.offsetTop;
      setPosition({ x, y });
    }

    handleResize(); // initial call to get position of the element on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [elementRef]);

  return (
    <div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore placeat
        quam dolorem ab, iure nam nesciunt, facere sed nihil molestias
        consectetur reprehenderit cupiditate itaque pariatur quia tenetur omnis
        nisi numquam quibusdam reiciendis beatae laboriosam earum. Numquam
        inventore fuga quae voluptatem consectetur officia. Dignissimos
        molestiae exercitationem quia ullam repellat accusamus ab voluptas hic
        officiis culpa voluptates nihil nesciunt impedit corrupti dolor fugit
        provident praesentium at, quisquam nobis nostrum debitis? Quibusdam enim
        ut sit voluptate excepturi nam reiciendis itaque accusamus. Totam
        aspernatur eos delectus dolorem minima id assumenda repellat cum enim
        ullam voluptatum incidunt, voluptas, odit quas nobis perspiciatis modi,
        ducimus sunt.
      </p>

      <div className="card" ref={elementRef}>
        <h3>Position</h3>
        <p>
          X: <strong>{position.x}</strong>
        </p>
        <p>
          Y: <strong>{position.y}</strong>
        </p>
      </div>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore placeat
        quam dolorem ab, iure nam nesciunt, facere sed nihil molestias
        consectetur reprehenderit cupiditate itaque pariatur quia tenetur omnis
        nisi numquam quibusdam reiciendis beatae laboriosam earum. Numquam
        inventore fuga quae voluptatem consectetur officia. Dignissimos
        molestiae exercitationem quia ullam repellat accusamus ab voluptas hic
        officiis culpa voluptates nihil nesciunt impedit corrupti dolor fugit
        provident praesentium at, quisquam nobis nostrum debitis? Quibusdam enim
        ut sit voluptate excepturi nam reiciendis itaque accusamus. Totam
        aspernatur eos delectus dolorem minima id assumenda repellat cum enim
        ullam voluptatum incidunt, voluptas, odit quas nobis perspiciatis modi,
        ducimus sunt.
      </p>
    </div>
  );
}

export default App;
