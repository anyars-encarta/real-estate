import { useEffect } from 'react';

const MenuCloser = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => {
      if (
        !ref.current || // Click outside of the menu
        ref.current.contains(e.target) || // Click within the menu
        e.target.closest('.menuIcon') || // Click on the menu icon
        e.target.closest('.menu Link') // Click on a menu item
        ) {
        return;
      }

        handler(e);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export default MenuCloser;
