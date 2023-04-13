import { useState, useEffect } from "react";

// A Media query function that basically returns a boolean value
// on the size of the screen. This is used to determine if the
// screen is mobile or not. If it is mobile, then the menu will
// be hidden and a hamburger menu will be displayed instead.

// This code defines a custom React hook named useMediaQuery. This hook takes a query parameter, which is a string containing a media query to be evaluated against the browser window's width.

// The hook uses the useState and useEffect hooks provided by React. It sets up a state variable named matches to keep track of whether the media query matches the window width or not. It then adds an event listener to the window's resize event, which updates the matches state whenever the window is resized.

// The hook returns the matches state variable, which will be true if the media query matches the current window width, and false otherwise.

// This hook can be used in a React component to conditionally render certain elements based on the window width. For example, if you wanted to show a different layout for smaller screens, you could use this hook to conditionally render different components based on the matches state.

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
