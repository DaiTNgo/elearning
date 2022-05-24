import styles from './NavigatorButton.module.scss';
import classNames from 'classnames/bind';
import Icon from '../Icon';
const cx = classNames.bind(styles);
type NavigatorButtonType = {
  transition?: boolean;
  more?: boolean;
  header?: boolean;
  round?: boolean;
  hover?: boolean;
  center?: boolean;
  sm_2?: boolean;
  url?: string;
  alt?: string;
  text?: string;
};
function NavigatorButton(props: NavigatorButtonType) {
  const cl = cx(
    'navigator-btn',
    { transition: props.transition },
    { more: props.more },
    { header: props.header },
    { round: props.round },
    { hover: props.hover }
  );
  return (
    <div
      className={cl}
      style={{
        marginInline: props.center ? 'auto' : '',
      }}
    >
      <Icon
        className={cx('size-icon')}
        url={props.url}
        alt={props.alt}
        sm_2={props.sm_2}
      />
      <p className={cx('navigator-text')}>{props.text}</p>
    </div>
  );
}

export default NavigatorButton;
