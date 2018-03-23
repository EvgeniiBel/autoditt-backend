import {list_all_links, vote_for_the_link, create_a_link} from '../controllers/linksController';

export default function (app) {
    app.route('/links')
        .get(list_all_links)
        .post(create_a_link);

    app.route('/link/:linkId')
        .post(vote_for_the_link);
}