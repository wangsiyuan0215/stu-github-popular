/**
 * Created by wangsiyuan on 4/13/17.
 */

import { default as Popular } from '../pages/popular';
import { default as Trending } from '../pages/trending';
import { default as Favorite } from '../pages/favorite';
import { default as My } from '../pages/my';

export default {
    'Popular': {
        name: 'Popular',
        component: Popular,
        icon: require('../assets/images/popular.png')
    },

    'Trending': {
        name: 'Trending',
        component: Trending,
        icon: require('../assets/images/trending.png')
    },

    'Favorite': {
        name: 'Favorite',
        component: Favorite,
        icon: require('../assets/images/favorite.png')
    },

    'My': {
        name: 'My',
        component: My,
        icon: require('../assets/images/my.png')
    }
}