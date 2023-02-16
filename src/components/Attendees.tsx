import React, { FC } from 'react';
import AttendeeItem from './AttendeeItem';
import { store, IAttendee } from '../store/Store';
import { observer } from 'mobx-react';
import Status from './Status';

interface AttendeesProps {
  onRemoveAttendee: (attendee: IAttendee) => void;
}

const Attendees: FC<AttendeesProps> = ({ onRemoveAttendee }) => {
  return (
    <div className="flex flex-row">
      <div className="pt-1 pr-[15px]">
        <p className="text-[#848793] font-medium text-sm pt-2">Attendees</p>
      </div>
      <div className="ml-2 w-full">
        {store && store.selectedAttendee
          ? store.selectedAttendee.map((attendee) => (
              <AttendeeItem key={attendee.email} attendee={attendee} onClick={onRemoveAttendee}>
                <Status />
              </AttendeeItem>
            ))
          : null}
      </div>
    </div>
  );
};

export default observer(Attendees);
