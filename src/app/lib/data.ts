import { PODCAST_URL } from "./constants";
import axios, { AxiosResponse } from "axios";
import { PodcastList } from "./definitions";

export async function fetchPodcastList() : Promise<PodcastList | undefined> {

    try {
        const reponse = await axios.get(PODCAST_URL)
        const podcastsData: PodcastList = reponse.data
        return podcastsData

    } catch (error) {
        console.error('Error fetching podcasts data', error)
    }
}