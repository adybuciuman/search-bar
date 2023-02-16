import React from 'react';
import Title from '../../components/Title';
import Attendees from '../../components/Attendees';
import Dropdown from '../../components/Dropdown';
import { useContainer } from './hooks/useContainer';

const Container = () => {
  const {
    inputRef,
    searchedValue,
    wordsTitle,
    onChangeTitle,
    displayDropdown,
    dropdownList,
    onAddAttendee,
    onRemoveAttendee,
  } = useContainer();

  return (
    <div className="w-2/5 pt-6 px-4 justify-end bg-white relative">
      <Title inputRef={inputRef} text={wordsTitle.join(' ')} onChangeText={onChangeTitle} />
      {displayDropdown && (
        <Dropdown
          searchedValue={searchedValue}
          items={dropdownList}
          onSelectedItem={onAddAttendee}
        />
      )}
      <Attendees onRemoveAttendee={onRemoveAttendee} />
    </div>
  );
};

export default Container;
