import {linkList, linkIdMap} from '../data';
import {Link} from '../models/link';
import {sumVotes} from '../../services/helper';
let ID_NEXT = 3;

let _links = null;

class Links {
    constructor() {
        this.links = linkList;
    }

    increaseCommentsCount(linkId) {
        linkIdMap[linkId].commentsCount++;
    }

    getAllLinks() {
        return this.links;
    }

    voteForLink(id, username, value) {
        try {
            linkIdMap[id].votes[username] = value;
            linkIdMap[id].votesCount =  sumVotes(linkIdMap[id].votes);
        } catch (e) {
            console.error('voteForLink: something went wrong');
        }
    }

    addLink(data) {
        let newLink = new Link(data);
        linkIdMap[newLink.id] = newLink;
        this.links.push(newLink);
        return newLink;
    }
}

function getLinksInstance() {
    if (!_links) {
        _links = new Links();
    }
    return _links;
}

export default getLinksInstance();