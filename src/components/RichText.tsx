/** Renders a string, turning **wrapped** phrases into emphasised text. */
const RichText = ({ text }: { text: string }) => (
  <>
    {text.split('**').map((part, i) =>
      i % 2 === 1 ? (
        <strong key={i} className="font-semibold text-ink">
          {part}
        </strong>
      ) : (
        part
      ),
    )}
  </>
);

export default RichText;
