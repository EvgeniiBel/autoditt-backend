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
        return this.comments.filter(comment => comment.linkId === parseInt(linkId));
    }

    addComment(data) {
        return !!data.parentWay ? this.addCommentForComment(data) : this.addCommentForLink(data);
    }

    addCommentForLink(data) {
        let newComment = new Comment(data);
        commentIdsMap[newComment.id] = newComment;
        this.comments.push(newComment);
        return newComment;
    }

    addCommentForComment(data) {
        let way = data.parentWay.split('/');
        let parentId = way[way.length -1];
        let newComment = new Comment(data);
        commentIdsMap[newComment.id] = newComment;
        let parentComment = this.commentIdsMap[parentId];
        if (!parentComment.comments) {
            parentComment.comments = [];
        }
        parentComment.comments.push(newComment);
        return newComment;
    }

    voteForComments(id, username, value) {
        try {
            commentIdsMap[id].votes[username] = value;
            commentIdsMap[id].votesCount =  sumVotes(commentIdsMap[id].votes);
            return commentIdsMap[id];
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