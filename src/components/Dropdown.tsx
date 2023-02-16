import React, { FC } from 'react';
import AttendeeItem from './AttendeeItem';
import { IAttendee } from '../store/Store';
import TextHighlight from './TextHighlight';

interface DropdownProps {
  searchedValue: string;
  items: IAttendee[];
  onSelectedItem?: (item: IAttendee) => void;
}

const Dropdown: FC<DropdownProps> = ({ searchedValue, items, onSelectedItem }) => {
  return (
    <div className="absolute w-9/12 p-1 rounded-lg bg-white rounded-md shadow-sm z-10">
      {items
        ? items.map((attendee) => (
            <AttendeeItem
              key={attendee.email}
              searchedValue={searchedValue}
              attendee={attendee}
              onClick={onSelectedItem}
            >
              <TextHighlight className="text-xs" text={attendee?.email} highlight={searchedValue} />
            </AttendeeItem>
          ))
        : null}
    </div>
  );
};

export default Dropdown;
