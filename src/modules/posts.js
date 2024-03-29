import * as postsAPI from '../api/posts';
import {
  createPromiseThunk,
  reducerUtils,
  handleAsyncActions,
  createPromiseThunkById,
  handleAsyncActionsById,
  createPromiseThunkByPostId
} from '../lib/asyncUtils';


const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

const CREATE_POST = 'CREATE_POST';
const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
const CREATE_POST_ERROR = 'CREATE_POST_ERROR';

const CREATE_POST_COMMENT = 'CREATE_POST_COMMENT';
const CREATE_POST_COMMENT_SUCCESS = 'CREATE_POST_COMMENT_SUCCESS';
const CREATE_POST_COMMENT_ERROR = 'CREATE_POST_COMMENT_ERROR';

const UPDATE_POST = 'UPDATE_POST';
const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
const UPDATE_POST_ERROR = 'UPDATE_POST_ERROR';

const DELETE_POST = 'DELETE_POST';
const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
const DELETE_POST_ERROR = 'DELETE_POST_ERROR';

// axios를 사용하여 서버에서 특정 postId에 해당하는 데이터를 가져오고, 가져온 데이터를 스토어에 업데이트
export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
export const getPost = createPromiseThunkById(GET_POST, postsAPI.getPostById);
export const createPost = createPromiseThunk(CREATE_POST, postsAPI.createPost);
export const createPostComment = createPromiseThunkByPostId(CREATE_POST_COMMENT, (id, postData) => postsAPI.createPostComment(id, postData));
export const updatePost = createPromiseThunkById(UPDATE_POST, postsAPI.updatePostById);
export const deletePost = createPromiseThunkById(DELETE_POST, postsAPI.deletePostById);


// initialState 쪽도 반복되는 코드를 initial() 함수를 사용해서 리팩토링 했습니다.
const initialState = {
  posts: reducerUtils.initial(),
  post: {}
};


// const initialState: {
//   posts: {
//       loading: boolean;
//       data: null;
//       error: null;
//   };
//   post: {};
// }
export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return handleAsyncActions(GET_POSTS, 'posts', true)(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return handleAsyncActionsById(GET_POST, 'post')(state, action);
    case CREATE_POST:
    case CREATE_POST_SUCCESS:
    case CREATE_POST_ERROR:
        return handleAsyncActions(CREATE_POST, 'posts', true)(state, action);
    case CREATE_POST_COMMENT:
    case CREATE_POST_COMMENT_SUCCESS:
    case CREATE_POST_COMMENT_ERROR:
        return handleAsyncActionsById(CREATE_POST_COMMENT, 'post', true)(state, action);
    case UPDATE_POST:
    case UPDATE_POST_SUCCESS:
    case UPDATE_POST_ERROR:
      return handleAsyncActionsById(UPDATE_POST, 'post')(state, action);
    case DELETE_POST:
    case DELETE_POST_SUCCESS:
    case DELETE_POST_ERROR:
      return handleAsyncActionsById(DELETE_POST, 'post')(state, action);
    
    default:
      return state;
  }
}