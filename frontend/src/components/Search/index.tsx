import React, { useEffect } from 'react';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { pathImg } from '../Layout/Header';
import { useState } from 'react';
import Icon from '../Icon';
const cx = classNames.bind(styles);

export default function Search() {
  const [isDisplay, setIsDisplay] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search.length > 0) {
      setIsDisplay(true);
    } else {
      setIsDisplay(false);
    }
  }, [search]);

  return (
    <div className={cx('search-wrapper')}>
      <input
        placeholder='Search...'
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <img
        src={`${pathImg}/search.svg`}
        alt='search'
        className={cx('search')}
      />
      <img
        src={`${pathImg}/clear.svg`}
        alt='clear'
        className={cx('clear')}
        style={{
          display: isDisplay ? 'block' : 'none',
        }}
        onClick={() => {
          setSearch('');
        }}
      />
    </div>
  );
}
