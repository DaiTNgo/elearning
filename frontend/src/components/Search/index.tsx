import React, { useEffect } from 'react';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import Icon from '../Icon';
import { PATH_IMG } from '../../utils/constant';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { onChange } from '../../redux/searchSlice';
const cx = classNames.bind(styles);

export default function Search() {
  const [isDisplay, setIsDisplay] = useState(false);
  const keyword = useAppSelector((state) => state.search.keyword);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (keyword.length > 0) {
      setIsDisplay(true);
    } else {
      setIsDisplay(false);
    }
  }, [keyword]);

  return (
    <div className={cx('search-wrapper')}>
      <input
        placeholder='Search...'
        value={keyword}
        onChange={(e) => {
          dispatch(onChange(e.target.value));
        }}
      />
      <img
        src={`${PATH_IMG}/search.svg`}
        alt='search'
        className={cx('search')}
      />
      <img
        src={`${PATH_IMG}/clear.svg`}
        alt='clear'
        className={cx('clear')}
        style={{
          display: isDisplay ? 'block' : 'none',
        }}
        onClick={() => {
          dispatch(onChange(''));
        }}
      />
    </div>
  );
}
