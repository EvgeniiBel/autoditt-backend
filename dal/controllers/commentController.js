import {comments} from '../data';

let _comments = null;

class Links {
    constructor() {
        this.comments = comments;
    }

    getAllComments() {
        return this.comments;
    }

    getAllCommentsForLink() {

    }

    addCommentForLink() {
    }

    addCommentForComment() {
    }
}

function getCommentsInstance() {
    if (!_comments) {
        _comments = new Links();
    }
    return _comments;
}

export default getCommentsInstance();