import styles from './Icon.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
type IconType = {
  pathIcon?: string;
  alt?: string;
  backgroundColor?: string;
  order?: number;
  isCircle?: boolean;
  isPadding?: boolean;
  isHover?: boolean;
  isBuy?: boolean;
  isBoxShadow?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  sm_2?: boolean;
};
export default function Icon({
  order,
  pathIcon,
  alt,
  backgroundColor,
  isCircle,
  isPadding,
  isHover,
  isBuy,
  isBoxShadow,
  size = 'sm',
  sm_2,
}: IconType) {
  const cl = cx(
    'icon',
    { [size]: true },
    { circle: isCircle },
    { hover: isHover },
    { padding: isPadding },
    { buy: isBuy },
    { boxShadow: isBoxShadow },
    {
      sm_2,
    }
  );
  return (
    <div
      className={cl}
      style={{
        backgroundColor,
      }}
    >
      {pathIcon ? (
        <img src={pathIcon} alt={alt} />
      ) : (
        <span className={cx('order')}>{order}</span>
      )}
    </div>
  );
}
