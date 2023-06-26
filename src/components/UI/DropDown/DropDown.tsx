'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import styles from './dropdown.module.css';

type Props = {
  placeholder: string;
  children: ReactNode;
  onChange: (e) => void;
  isSelected: boolean;
};

type Position = {
  x: number;
  y: number;
} | null;

const DropDown = function ({
  placeholder,
  children,
  onChange,
  isSelected,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<Position>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
  const dropDownButtonRef = useRef<HTMLButtonElement>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        optionsRef.current &&
        dropDownButtonRef.current &&
        !(optionsRef.current == event.target.closest('div')) &&
        !dropDownButtonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setPosition(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleList = (e) => {
    setIsOpen(!isOpen);
    const bounds = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: bounds.x,
      y: bounds.y + bounds.height,
    });
    setWidth(bounds.width);
  };
  const handleClick = (e) => {
    setIsOpen(!isOpen);
    onChange(e);
  };

  const buttonClasses = [styles.input];
  if (isOpen) {
    buttonClasses.push(styles.open);
  }
  if (!isSelected) {
    buttonClasses.push(styles.disabled);
  }
  return (
    <div>
      <button
        className={buttonClasses.join(' ')}
        ref={dropDownButtonRef}
        onClick={toggleList}
      >
        {placeholder}
      </button>
      {isOpen &&
        createPortal(
          <div
            className={styles.options}
            onClick={handleClick}
            style={{
              top: position?.y,
              left: position?.x,
              position: 'absolute',
              width,
            }}
            ref={optionsRef}
          >
            {children}
          </div>,
          document.body
        )}
    </div>
  );
};

export default DropDown;
