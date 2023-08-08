import React, { useState } from 'react';
import { Drawer } from 'antd';

const AvailabilityList = ({ items }) => {
  const [visible, setVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const showDrawer = (item) => {
    setCurrentItem(item);
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="availability-item">
          {item.name} Availability{' '}
          <span className="availability-click" onClick={() => showDrawer(item)}>
            Click to view
          </span>
        </div>
      ))}
      <Drawer
        title={currentItem ? `${currentItem.name} Availability` : ''}
        placement="right"
        closable={true}
        onClose={onClose}
        visible={visible}
      >
        {currentItem ? currentItem.availabilityDetails : null}
      </Drawer>
    </div>
  );
};

export default AvailabilityList;
