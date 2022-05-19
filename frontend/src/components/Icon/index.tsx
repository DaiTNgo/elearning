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
}: IconType) {
  return (
    <div
      className={cx(
        'icon',
        { [size]: true },
        { circle: isCircle },
        { hover: isHover },
        { padding: isPadding },
        { buy: isBuy },
        { boxShadow: isBoxShadow }
      )}
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
