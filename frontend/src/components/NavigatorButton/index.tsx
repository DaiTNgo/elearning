import styles from './NavigatorButton.module.scss';
import classNames from 'classnames/bind';
import Icon from '../Icon';
const cx = classNames.bind(styles);

function NavigatorButton(props: any) {
  return (
    <button
      className={cx('navigator-btn', {
        isTransition: props.isTransition,
      })}
    >
      <Icon pathIcon={props.pathIcon} alt={props.alt} />
      <p className={cx('navigator-text')}>{props.text}</p>
    </button>
  );
}

export default NavigatorButton;
