import { RootState } from './index';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosAuth } from '../utils/axios';
import { loginService } from '../services/login';
type CurrentUserType = {
  id: number;
  email: string;
  user_name: string;
  avatar: string;
  description: string;
  acc_twiter: string;
  my_website: string;
  role: 'user' | 'admin' | 'instructor';
};
type InitTialStateType = {
  accessToken: string;
  currentUser: CurrentUserType | undefined;
  error: string | undefined;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
};
export const login = createAsyncThunk(
  'user/login',
  async ({ email, password }: { email: string; password: string }) => {
    const response = await loginService({ email, password });
    if (response.success) return response;
    else {
      throw new Error(response.message);
    }
  }
);

const initialState: InitTialStateType = {
  accessToken: '',
  currentUser: undefined,
  status: 'idle',
  error: '',
};
const authenSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    // postAdded: {
    //   reducer(state, action) {
    //     state.push(action.payload);
    //   },
    //   prepare(title, content) {
    //     return {
    //       payload: {
    //         title,
    //         content,
    //         // id:nanoid()
    //       },
    //     };
    //   },
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.accessToken = action.payload.accessToken;
        state.currentUser = action.payload.message;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

/*
export const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);

  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  let content;

  if (postStatus === 'loading') {
    content = <Spinner text='Loading...' />;
  } else if (postStatus === 'succeeded') {
    // Sort posts in reverse chronological order by datetime string
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));

    content = orderedPosts.map((post) => (
      <PostExcerpt key={post.id} post={post} />
    ));
  } else if (postStatus === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <section className='posts-list'>
      <h2>Posts</h2>
      {content}
    </section>
  );
};
 */

export const getAccessToken = (state: RootState) => state.auth.accessToken;
export const getUser = (state: RootState) => state.auth.currentUser;

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default authenSlice.reducer;
