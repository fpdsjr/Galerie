import { useEffect, useRef } from 'react';

interface IUseCloseMenuDropDownProps {
  setModalUser: (arg0: boolean) => void;
}

export default function useCloseMenuDropDown({
  setModalUser,
}: IUseCloseMenuDropDownProps) {
  const menuRef = useRef<HTMLInputElement>(null);
  const userElement = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handle = ({ target }: MouseEvent) => {
      if (target !== userElement.current) {
        if (!menuRef.current?.contains(target as Node)) {
          setModalUser(false);
        }
      }
    };

    document.addEventListener('mousedown', handle);
  });

  return {
    menuRef,
    userElement,
  };
}
