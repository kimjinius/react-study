import styled, { createGlobalStyle } from "styled-components";
import BlogTemplate from "../components/blog/BlogTemplates";
import PostListContainer from "../containers/PostListContainer";
import SagaTestContainer from "../containers/SagaTestContainer";
import { BsPencilSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
    // background-image: url('https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdYH0BY%2FbtrtoAApxNA%2F8hD0b8tyZMGmvcozW1XdFk%2Fimg.png');
    background-image: url('https://i.pinimg.com/originals/00/71/e1/0071e1e2ccbd1374a21398e6280d470a.jpg');

    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
}
`;

const CreatePostDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 200px;
  span{
    margin-left : 10px;
    font-size : 18px;
    color : #59634f;
  }
  margin-bottom : 30px;
`;

const BlogHome = () => {
    const timestamp = +new Date();
    console.log('현재 타임스탬프:', timestamp);
    return (
      <div>
        <GlobalStyle />
        {/* <SagaTestContainer></SagaTestContainer> */}
        {/* <BlogHead title="블로그 홈" /> */}
        <SagaTestContainer titleText="블로그 홈"/>

        <Link to={`/createpost`} style={{ textDecoration: "none", color : "black" }}>
          <CreatePostDiv>
            <BsPencilSquare  size="25" color="#59634f"/>
            <span>글쓰기</span>
          </CreatePostDiv>
        </Link>

        
        <BlogTemplate>
          <PostListContainer></PostListContainer>
        </BlogTemplate>
      </div>

    );
}

export default BlogHome;
