import React, { FC } from 'react';

interface TextHighlightProps {
  className?: string | undefined;
  text: string;
  highlight?: string;
}

const TextHighlight: FC<TextHighlightProps> = ({ className, text, highlight }) => {
  const getHighlightedText = (text: string, highlight: string = ''): JSX.Element[] => {
    // Split on highlight term and include term into parts
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));

    return parts.map((part, i) => {
      const isHighlighted = part.toLowerCase() === highlight.toLowerCase();

      return isHighlighted ? (
        <span key={i} className="text-[#7161EC]">
          {part}
        </span>
      ) : (
        <span key={i}>{part}</span>
      );
    });
  };

  return <span className={className}>{getHighlightedText(text, highlight)}</span>;
};

export default TextHighlight;
