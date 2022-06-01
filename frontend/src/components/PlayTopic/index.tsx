import React from 'react';
import ReactDOM from 'react-dom';
import { PATH_IMG } from '../../utils/constant';
import Icon from '../Icon';
function PlayTopic({
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
      <div className={`modal ${open ? 'is-visible' : ''}`}>
        <div className='modal-overlay'></div>
        <div className='modal-main'>
          <div className='close' onClick={handleClose}>
            <Icon
              url={`${PATH_IMG}/x.svg`}
              round
              backgroundColor='rgba(0,0,0,0.5)'
              padding
            />
          </div>
          <div className='modal-content'>{children}</div>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLBodyElement
  );
}

export default PlayTopic;
