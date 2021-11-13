import React, { useState, useEffect } from 'react';
import styles from './index.less';
import ChildPageA from './ChildPageA';
import ChildPageB from './ChildPageB';

export default function rootPage() {
  const [activeKey, setActiveKey] = useState('');
  const renderContent = (activeKey: string) => {
    switch (activeKey) {
      case 'childPageA':
        return <ChildPageA />;
      case 'childPageB':
        return <ChildPageB />;
      default:
        return '正确更新';
    }
  };
  return (
    <div className={styles.rootPage}>
      <div className={styles.pageContent}>{renderContent(activeKey)}</div>
    </div>
  );
}
