import {comments, commentIdsMap} from '../data';
import {Comment} from "../models/comment";
import {sumVotes} from '../../services/helper';

let _comments = null;

class Links {
    constructor() {
        this.comments = comments;
        this.commentIdsMap = commentIdsMap;
    }

    getAllComments() {
        return this.comments;
    }

    getAllCommentsForLink(linkId) {
        console.log('DAL');
        console.log(linkId);
        return this.comments.filter(comment => comment.linkId === parseInt(linkId));
    }

    addComment(data) {
        return !!data.parentId ? this.addCommentForComment(data) : this.addCommentForLink(data);
    }

    addCommentForLink(data) {
        let newComment = new Comment(data);
        commentIdsMap[newComment.id] = newComment;
        this.comments.push(newComment);
        return newComment;
    }

    addCommentForComment(parentId, data) {
        let newComment = new Comment(data);
        commentIdsMap[newComment.id] = newComment;
        this.commentIdsMap[parentId].push(newComment);
        return newComment;
    }

    voteForComments(id, username, value) {
        try {
            commentIdsMap[id].votes[username] = value;
            commentIdsMap[id].votesCount =  sumVotes(commentIdsMap[id].votes);
        } catch (e) {
            console.error('voteForComments: something went wrong');
        }
    }
}

function getCommentsInstance() {
    if (!_comments) {
        _comments = new Links();
    }
    return _comments;
}

export default getCommentsInstance();