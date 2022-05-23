import styles from './Icon.module.scss';
import classNames from 'classnames/bind';
import { ButtonHTMLAttributes } from 'react';
const cx = classNames.bind(styles);
type IconType = {
  url?: string;
  alt?: string;
  backgroundColor?: string;
  order?: number;
  round?: boolean;
  padding?: boolean;
  hover?: boolean;
  buy?: boolean;
  boxShadow?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  sm_2?: boolean;
  invert?: boolean;
  cursor?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
};
export default function Icon({
  order,
  url,
  alt,
  backgroundColor,
  round,
  padding,
  hover,
  buy,
  boxShadow,
  size = 'sm',
  sm_2,
  invert,
  cursor,
  onClick,
}: IconType) {
  const cl = cx(
    'icon',
    // { [size]: true },
    [size],
    { round },
    { hover },
    { padding },
    { buy },
    { boxShadow },
    { invert },
    { cursor },
    { sm_2 }
  );
  return (
    <div
      className={cl}
      style={{
        backgroundColor,
      }}
      onClick={onClick}
    >
      {url ? (
        <img src={url} alt={alt} />
      ) : (
        <span className={cx('order')}>{order}</span>
      )}
    </div>
  );
}
