import {linkList} from "./links";

export const comments = [
    {
        id:0,
        linkId:0,
        username:'Jenya',
        commentText: 'Developer',
        votes:{},
        votesCount:0,
        comments:[{
            id:2,
            parentWay:'0',
            linkId:0,
            username:'Yuval',
            commentText: 'I\'ve got some tips to help:\n' +
            '\n' +
            'If its about grades then you\'ve gotta know that high school grades are mostly about diligence. Don\'t do your homework last minute, take good notes and actually review and revise them, and make sure you\'re asking the teacher or classmates about anything that confuses you.\n' +
            '\n' +
            'If you just want to be smarter in general, it\'s all about constantly learning. Stay up to date on current events. Read magazines like National Geographic, The Atlantic, and Pacific Standard. Read books about your areas of interest. Listen to NPR. Learn some geography.',
            votes:{},
            votesCount:0,
            comments:[{
                id:3,
                parentWay:'0/2',
                linkId:0,
                username:'Jenya',
                commentText: 'No Youval, you are not right.',
                votes:{},
                votesCount:0
            }]
        }]
    },
    {
        id:1,
        linkId:1,
        username:'Greg',
        commentText: 'How is your task?',
        votes:{},
        votesCount:0
    }
];

//indexing functionality simulating
export const commentIdsMap = {
    0:comments[0],
    1:comments[1],
    2:comments[0].comments[0],
    3:comments[0].comments[0].comments[0]
};