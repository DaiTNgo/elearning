import classNames from 'classnames/bind';
import { PATH_IMG } from '../../utils/constant';
import Icon from '../Icon';
import Text from '../Text';
import styles from './DiscountSection.module.scss';
const cx = classNames.bind(styles);

function DiscountSection() {
  return (
    <div className='container section'>
      <div className={cx('discount-wrapper')}>
        <div className={cx('discount-left')}>
          <Text
            title='Get discounts'
            subTitle='Start with more'
            desc='We’ve partnered with the biggest design tools on the market to help you get started.'
          />
        </div>
        <div className={cx('discount-right')}>
          <div className={cx('right-wrapper')}>
            <div className={cx('circle')}>
              50% off Shape.so
              <div className={cx('icon-wrapper')}>
                <Icon url={`${PATH_IMG}/shape-logo.svg`} size='md' />
              </div>
            </div>
            <div className={cx('circle')}>
              50% off Angle.sh
              <div className={cx('icon-wrapper')}>
                <Icon url={`${PATH_IMG}/angle-logo.svg`} size='md' />
              </div>
            </div>
            <div className={cx('circle')}>
              20% off Sketch
              <div className={cx('icon-wrapper')}>
                <Icon url={`${PATH_IMG}/sketch-logo.svg`} size='md' />
              </div>
            </div>
            <div className={cx('circle')}>
              20% off ProtoPie
              <div className={cx('icon-wrapper')}>
                <Icon url={`${PATH_IMG}/protopie-logo.svg`} size='md' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscountSection;
