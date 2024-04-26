"use client";
import { useState } from "react";
import Image from "next/image";
import { Podcast } from "@/app/lib/definitions";
import PodcastListItem from "@/app/ui/layout/podcastListItem";

export default function List(props: { podcastList: [Podcast] }) {
  const [filter, setFilter] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <div className="flex flex-row-reverse">
        <input
          className="text-center"
          type="text"
          placeholder="Filtrar elementos..."
          value={filter}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-row flex-wrap overflow-y-scroll scrollbar-none podcastList px-2">
        {props.podcastList
          .filter((podcast: Podcast) =>
            filter
              ? podcast.title.label.includes(filter) ||
                podcast["im:artist"].label.includes(filter)
              : podcast
          )
          .map((podcast: Podcast, index: number) => (
            <PodcastListItem
              key={index}
              podcastItem={podcast}
            ></PodcastListItem>
          ))}
      </div>
    </>
  );
}
