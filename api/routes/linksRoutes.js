import {list_all_links, vote_for_the_link} from '../controllers/linksController';

export default function (app) {
    app.route('/links')
        .get(list_all_links)
        .post(vote_for_the_link);

    app.route('/link/:linkId')
        .post(vote_for_the_link)
}