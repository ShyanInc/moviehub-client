'use client';

import { useState } from 'react';
import s from './style.module.sass';
import collapseIcon from '@/public/assets/icons/collapse.png';
import expandIcon from '@/public/assets/icons/expand.png';
import Image from 'next/image';

export const ShortDescription = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={s.shortDescription}>
      <div onClick={toggleOpen} className={s.shortDescriptionHeader}>
        <h2>Short Description</h2>
        {isOpen ? (
          <Image src={collapseIcon} alt={'Collapse icon'} />
        ) : (
          <Image src={expandIcon} alt={'Expand icon'} />
        )}
      </div>
      <div className={(!isOpen && s.hidden) + ' ' + s.shortDescriptionContent}>
        <p>
          Невеста» — таинственная женщина, которая входила в элитный отряд убийц
          и считалась экспертом во владении мечом. Однажды она решила изменить
          свой образ жизни, покончив с карьерой наемного убийцы, чтобы выйти
          замуж за любимого мужчину и осесть в спокойном месте.
        </p>
      </div>
    </div>
  );
};
