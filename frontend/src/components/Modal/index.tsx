import React from 'react';
import ReactDOM from 'react-dom';
import { PATH_IMG } from '../../utils/constant';
import Icon from '../Icon';
import styles from './Modal.module.scss';
import classNames from 'classnames/bind';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
const cx = classNames.bind(styles);

function Modal({
  children,
  open = false,
  handleClose,
}: {
  children: React.ReactNode;
  open: boolean;
  handleClose: () => void;
}) {
  if (typeof document === 'undefined') return <div className='modal'></div>;
  return ReactDOM.createPortal(
    <div>
      <div
        className={cx('modal', {
          'is-visible': open,
        })}
      >
        <div className={cx('modal-overlay')}></div>
        <div className={cx('modal-main')}>
          <div className={cx('close')} onClick={handleClose}>
            <Icon
              url={`${PATH_IMG}/x.svg`}
              round
              backgroundColor='rgba(0,0,0,0.5)'
              padding
            />
          </div>
          <div className={cx('modal-content')}>{children}</div>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLBodyElement
  );
}

export default Modal;
