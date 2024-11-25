export type RichText = {
  annotations: Annotations; // Adjust this for specific annotation properties
  plain_text: string;
  href: string | null;
};

type Annotations = {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
};

export default function RichText({ text }: { text: RichText[] }) {
  return text.map((textBlock, index) => {
    const { plain_text, annotations, href } = textBlock;
    const { bold, italic, strikethrough, underline, code, color } = annotations;
    let textColor;
    if (color === 'default') {
      textColor = 'text-black';
    } else if (color == 'blue') {
      textColor = 'text-blue-500';
    }

    return (
      <span
        key={index}
        className={`${bold ? 'font-bold' : ''} ${italic ? 'italic' : ''} ${
          strikethrough ? 'line-through' : ''
        } ${underline ? 'underline' : ''} ${textColor}`}
      >
        {href ? (
          <a href={href} target="_blank" rel="noreferrer" className="underline">
            {plain_text}
          </a>
        ) : (
          plain_text
        )}
      </span>
    );
  });
}
