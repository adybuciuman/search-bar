import { ChangeEvent, useCallback, useRef, useState } from 'react';
import { IAttendee, store } from '../../../store/Store';

export const useContainer = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [wordsTitle, setWordsTitle] = useState<string[]>([]);
  const [dropdownList, setDropdownList] = useState<IAttendee[]>([]);
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const [searchedValue, setSearchedValue] = useState('');

  const onChangeTitle = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const title = event.target.value;

      if (!title) {
        setWordsTitle([]);
        setDisplayDropdown(false);
        setDropdownList([]);
        return;
      }

      const prevTitle = wordsTitle.join(' ');

      const newWordsTitle = title.split(' ');
      setWordsTitle(newWordsTitle);

      const selectedWord = title
        .substring(0, inputRef?.current?.selectionStart ?? 0)
        .split(' ')
        .pop();

      if (!selectedWord?.trim() || selectedWord.length < 2) {
        setDisplayDropdown(false);
        setDropdownList([]);
        return;
      }

      setSearchedValue(selectedWord);

      if (prevTitle?.length > title.length) {
        removeAttendee(newWordsTitle);
      }

      const dropdownList = getDropdownList(selectedWord);

      setDisplayDropdown(dropdownList.length > 0);
      setDropdownList(dropdownList);
    },
    [wordsTitle],
  );

  const onAddAttendee = (item: IAttendee) => {
    if (!wordsTitle) {
      return;
    }

    const title = wordsTitle.join(' ');
    const partialTitle = title.substring(0, inputRef?.current?.selectionStart ?? 0).split(' ');
    partialTitle.pop();
    partialTitle.push(item.firstName);

    const updatedWords = [...partialTitle, ...wordsTitle.slice(partialTitle.length)];
    store.addSelectedAttendee(item);
    setWordsTitle(updatedWords);
    setDisplayDropdown(false);
  };

  const onRemoveAttendee = (attendee: IAttendee) => {
    const updateWordsTitle = wordsTitle.filter((word) => word !== attendee.firstName);
    setWordsTitle(updateWordsTitle);
    store.removeSelectedAttendee(attendee);
  };

  return {
    inputRef,
    searchedValue,
    wordsTitle,
    onChangeTitle,
    displayDropdown,
    dropdownList,
    onAddAttendee,
    onRemoveAttendee,
  };
};

function removeAttendee(words: string[]) {
  const missingAttendee = store.selectedAttendee.filter(
    (attendee) => !words.includes(attendee.firstName),
  );
  missingAttendee.forEach((attendee) => {
    store.removeSelectedAttendee(attendee);
  });
}

function getDropdownList(searchedValue: string) {
  return store.attendees.filter((item) => {
    const isSelectedAlready = store.selectedAttendee.find(
      (attendee) => attendee.email === item.email,
    );
    if (isSelectedAlready) return false;

    return item.firstName.toLowerCase().includes(searchedValue?.toLowerCase() ?? '');
  });
}
