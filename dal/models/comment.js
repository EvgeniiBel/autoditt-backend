import moment from 'moment';

let nextId = 4;

export class Comment {
    constructor(options) {
        this.id = nextId++;
        this.linkId = options.linkId;
        this.parentWay = options.parentWay;
        this.commentText = options.commentText;
        this.username = options.username;
        this.comments = [];
        this.votes = {};
        this.votesCount = 0;
        this.submittedData = moment().format('MMM D, YYYY HH:MM');
    }
}