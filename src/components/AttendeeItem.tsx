import React, { FC } from 'react';
import { IAttendee } from '../store/Store';
import TextHighlight from './TextHighlight';

interface AttendeeItemProps {
  searchedValue?: string;
  attendee: IAttendee;
  children: React.ReactNode;
  onClick?: (item: IAttendee) => void;
}

const AttendeeItem: FC<AttendeeItemProps> = ({ searchedValue, attendee, children, onClick }) => {
  return (
    <div
      onClick={() => onClick?.(attendee)}
      className="flex items-center p-2 hover:bg-[#F1F2F8] rounded-md"
    >
      <img className="w-6 h-6" src={attendee.photoUrl} alt="profile photo" />
      <div className="ml-2 flex flex-col align-middle">
        <TextHighlight
          className="text-sm"
          text={`${attendee?.firstName} ${attendee?.lastName}`}
          highlight={searchedValue}
        />
        {children}
      </div>
    </div>
  );
};

export default AttendeeItem;
