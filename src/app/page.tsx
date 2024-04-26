import Image from "next/image";
import { useState } from "react";
import { fetchPodcastList } from "./lib/data";
import { Podcast, PodcastList, Label } from "./lib/definitions";
import PodcastListItem from "./ui/layout/podcastListItem";
import "./globals.css";
import List from "./ui/layout/list";

export default async function Home() {
  const podcastData: PodcastList | undefined = await fetchPodcastList();

  //console.log(podcastData?.feed.entry[0]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {podcastData ? (
        <List podcastList={podcastData.feed.entry}></List>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}
