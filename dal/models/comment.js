let nextId = 3;

export class Comment {
    constructor(options) {
        this.id = nextId++;
        this.linkId = options.linkId;
        this.commentText = options.commentText;
        this.username = options.username;
        this.comments = [];
        this.votes = {};
        this.votesCount = 0;
    }
}