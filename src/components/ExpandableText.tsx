import { Button } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  description: string | undefined;
}
const ExpandableText = ({ description }: Props) => {
  const [shortenedText, setShortenedText] = useState(false);
  const clippedText =
    description && description.length > 200 && !shortenedText
      ? description.slice(0, 200) + "..."
      : description;

  return (
    <>
      <p>
        {clippedText}
        <Button
          onClick={() => setShortenedText(!shortenedText)}
          variant="outlined"
          color="secondary"
        >
          {shortenedText ? "Show less" : "Show more "}
        </Button>
      </p>
    </>
  );
};

export default ExpandableText;
