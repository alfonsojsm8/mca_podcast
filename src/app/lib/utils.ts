import { AUTHOR_SEPARATOR } from './constants'
import { PodcastList } from './definitions'

export function removeAuthorFromTitle (title: string) {
    return title.split(AUTHOR_SEPARATOR)[0]
}

export function formatPodcastList ( podcastList: PodcastList) {
    return podcastList
}