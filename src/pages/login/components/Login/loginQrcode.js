import React from 'react';
import { Icon, Tooltip } from 'antd';
import styles from './loginQrcode.less';

export default props => {
  const { onClick = () => {} } = props;
  return (
    <div style={{ textAlign: 'right' }}>
      <span className={styles.qrcode} onClick={onClick}>
        <Tooltip placement="topLeft" title="登录">
          <Icon type="qrcode" />
        </Tooltip>
      </span>
    </div>
  );
};
