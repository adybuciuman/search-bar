import React, { ChangeEvent, FC, LegacyRef } from 'react';

interface TitleProps {
  text: string;
  inputRef: LegacyRef<HTMLInputElement>;
  onChangeText: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Title: FC<TitleProps> = ({ text, onChangeText, inputRef }) => {
  return (
    <input
      ref={inputRef}
      className="text-xl font-bold placeholder-[#BDBFC5] border-none outline-none w-full pb-2"
      placeholder={'Type Helen or Emily'}
      value={text}
      onChange={onChangeText}
    />
  );
};

export default Title;
