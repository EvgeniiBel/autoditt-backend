import {list_all_links, create_a_link} from '../controllers/linksController';

export default function (app) {
    app.route('/links')
        .get(list_all_links)
        .post(create_a_link);
}