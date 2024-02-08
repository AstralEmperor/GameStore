const BASE_URL = "http://localhost:5000";

export const STORE_URL = BASE_URL + '/api/store/'
export const GAMES_URL = STORE_URL + '/games';
export const GAMES_CATEGORIES_URL = STORE_URL + '/categories';
export const GAMES_BY_CATEGORY_URL = STORE_URL + '/category/';
export const GAMES_BY_ID_URL = GAMES_URL + '/';

export const USER_LOGIN_URL = STORE_URL + '/users/login';