import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_POST = 'ADD_POST';
export const ADD_POSTS = 'ADD_POSTS';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

// Export Actions
export function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}

export function addPostRequest(post) {
  return (dispatch) => {
    return callApi('posts', 'post', {
      post: {
        name: post.name,
        title: post.title,
        content: post.content,
      },
    }).then(res => {
        dispatch(addPost(res.post));
      });
  };
}

export function addPosts(posts) {
  return {
    type: ADD_POSTS,
    posts,
  };
}

export function fetchPosts() {
  return (dispatch) => {
    return callApi('posts').then(res => {
      dispatch(addPosts(res.posts));
    });
  };
}

export function fetchPost(cuid) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`).then(res => dispatch(addPost(res.post)));
  };
}

export function deletePost(cuid) {
  return {
    type: DELETE_POST,
    cuid,
  };
}

export function thumbUpPost(cuid) {
  return {
    type: THUMB_UP_COMMENT,
    cuid: cuid
  };
}

export function thumbUpPostRequest(post) {
  post.voteCount++;
  return (dispatch) => {
    return callApi(`posts/${post.cuid}`, 'put', {
      post: {
        name: post.name,
        title: post.title,
        content: post.content,
        voteCount: post.voteCount,
      },
    }).then((res) => dispatch(thumbUpPost(post.cuid)));
  };
}

export function thumbDownPost(cuid) {
  return {
    type: THUMB_DOWN_COMMENT,
    cuid: cuid
  };
}

export function thumbDownPostRequest(post) {
  post.voteCount--;
  return (dispatch) => {
    return callApi(`posts/${post.cuid}`, 'put', {
      post: {
        name: post.name,
        title: post.title,
        content: post.content,
        voteCount: post.voteCount,
      },
    }).then((res) => dispatch(thumbDownPost(post.cuid)));
  };
}

export function editPost(cuid, post) {
  return {
    type: EDIT_POST,
    cuid,
    post
  };
};

export function editPostRequest(cuid, post) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`, 'put', {
      post: {
        name: post.name,
        title: post.title,
        content: post.content
      },
    }).then(res => dispatch(editPost(cuid,post)));
  };
};

export function deletePostRequest(cuid) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`, 'delete').then(() => dispatch(deletePost(cuid)));
  };
}
