import styles from './NavigatorButton.module.scss';
import classNames from 'classnames/bind';
import Icon from '../Icon';
const cx = classNames.bind(styles);

function NavigatorButton(props: any) {
  return (
    <button
      className={cx(
        'navigator-btn',
        {
          isTransition: props.isTransition,
        },
        { more: props.more },
        { header: props.header },
        {
          round: props.round,
        },
        {
          hover: props.hover,
        }
      )}
    >
      <Icon
        className={cx('size-icon')}
        pathIcon={props.pathIcon}
        alt={props.alt}
        sm_2={props.sm_2}
      />
      <p className={cx('navigator-text')}>{props.text}</p>
    </button>
  );
}

export default NavigatorButton;
