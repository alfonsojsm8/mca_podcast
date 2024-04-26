
export type Label = {
    label: string
}

export type Author = {
    name: Label,
    uri: Label
}

export type LinkAttributes = {
    rel: string,
    type: string,
    href: string
}

export type Link = {
    attributes: LinkAttributes
}

export type ImageLink = {
    label: Label,
    attributes: LinkAttributes
}

export type Podcast = {
    id: any,
    title: Label
    'im:artist': {
        label: Label,
        attributes: any
    }
    'im:image': [{label: Label, attributes: any}]
}

export type Feed = {
    author: Label,
    entry: [Podcast],
    updated: Label,
    rights: Label,
    title: Label,
    icon: Label,
    link: [Link],
    id: Label
}

export type PodcastList = {
    feed: Feed
}


