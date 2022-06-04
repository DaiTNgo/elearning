import classNames from 'classnames/bind';
import { UserResponse } from '../../../Types';
import { PATH_IMG } from '../../../utils/constant';
import Icon from '../../Icon';
import CardLayout from '../Layout';
import styles from './Instructor.module.scss';

const cx = classNames.bind(styles);
export default function Instructor({
  info,
}: {
  info: Omit<
    UserResponse,
    'email' | 'id' | 'my_website' | 'role' | 'acc_twiter'
  >;
}) {
  if (!info) {
    return <div>Loadding...</div>;
  }
  return (
    <CardLayout>
      <div className={cx('card-wrapper')}>
        <Icon url={info.avatar} size='lg' round />

        <h3 className={cx('card-title')}>{info.user_name}</h3>

        <p className={cx('card-desc')}>{info.description}</p>
        <div className={cx('wrapper-icon')}>
          <Icon
            url={`${PATH_IMG}/star.svg`}
            alt='type course'
            round={true}
            hover={true}
            padding={true}
            backgroundColor='rgba(0,0,0,0.2)'
          />
          <Icon
            url={`${PATH_IMG}/twitter-grey.svg`}
            alt='instructor'
            round={true}
            hover={true}
            padding={true}
            backgroundColor='rgba(0,0,0,0.2)'
          />
        </div>
      </div>
    </CardLayout>
  );
}
