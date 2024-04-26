import Image from "next/image";
import { Podcast, Label } from "../../lib/definitions";

export default function PodcastListItem(props: { podcastItem: Podcast }) {
  const title: Label = props.podcastItem.title;
  const author: string = props.podcastItem["im:artist"].label;
  const image: string | undefined = props.podcastItem["im:image"][2].label;

  return (
    <div className="flex flex-col mb-4">
      <div className="flex flex-row justify-center mb-2">
        <Image
          src={image ? image : null}
          alt="Podcast Image"
          width={125}
          height={125}
          className="rounded-full"
        ></Image>
      </div>
      <div className="rounded-md border-solid shadow-md py-4 px-8 -mt-16 mb-2 mx-2 flex flex-col text-center pt-16 overflow-y-hidden podcastListItem">
        <p className="text-sm font-bold">{title.label}</p>
        <p className="text-sm">Author: {author}</p>
      </div>
    </div>
  );
}
