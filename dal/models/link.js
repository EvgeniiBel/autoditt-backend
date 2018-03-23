let nextId = 3;

export class Link {
    constructor(options) {
        this.id = nextId++;
        this.title = options.title;
        this.imageUrl = options.imageUrl;
        this.username = options.username;
        this.link = options.link;
        this.votes = {};
        this.votesCount = 0;
        this.comments = [];
        this.commentsCount = 0;
    }
}