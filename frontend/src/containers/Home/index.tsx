import { useState, useEffect, ChangeEvent, MouseEvent } from "react";
import { useDispatch } from "react-redux";

import { BlogCard, FormInput, Loading } from "components";
import { AppActions, AppDispatch, RootState, useAppSelector } from "store";

import {
  Container,
  Home,
  Row,
  Pagination,
  Page,
  Select,
  Option,
  PageButton,
  Modal,
  ModalCard,
  ModalHeader,
  ModalBody,
  ModalFooter,
  SearchForm,
  SearchButton,
  CloseButton,
} from "./style";

export const HomeContainer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const blog = useAppSelector((store: RootState) => store.blog);
  const loading = useAppSelector((store: RootState) => store.load.loading);
  const [state, setState] = useState({
    perPage: 5,
    pageNum: 1,
    sort: "createdAt",
    keyword: "",
  });
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    dispatch(AppActions.blog.getBlogRequest(state));
  }, []);

  const onKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      keyword: e.target.value,
    });
  };

  const onSearch = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(
      AppActions.blog.getBlogRequest({
        ...state,
      })
    );
  };

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
    dispatch(
      AppActions.blog.getBlogRequest({
        ...state,
        [e.target.name]: e.target.value,
      })
    );
  };

  const onPrev = () => {
    if (state.pageNum > 1) {
      setState({
        ...state,
        pageNum: state.pageNum - 1,
      });
      dispatch(
        AppActions.blog.getBlogRequest({
          ...state,
          pageNum: state.pageNum - 1,
        })
      );
    }
  };

  const onNext = () => {
    if (state.pageNum < blog.len) {
      setState({
        ...state,
        pageNum: state.pageNum + 1,
      });
      dispatch(
        AppActions.blog.getBlogRequest({
          ...state,
          pageNum: state.pageNum + 1,
        })
      );
    }
  };

  const onDetail = (id: number) => () => {
    dispatch(AppActions.blog.getDetailBlogRequest(id));
    setToggle(true);
  };
  return (
    <>
      {loading ? <Loading /> : null}
      <Home>
        <Container>
          <SearchForm>
            <FormInput
              error=""
              name="keyword"
              cyDataId="search-input"
              placeholder="Search by keyword"
              value={state.keyword}
              onChange={onKeyword}
            />
            <SearchButton onClick={onSearch} cy-data-id="search-button">
              Search
            </SearchButton>
          </SearchForm>
          <Row>
            {blog.blog.length > 0
              ? blog.blog.map((item, index) => (
                  <BlogCard
                    key={index}
                    postId={item.postId}
                    title={item.title}
                    content={item.content}
                    keyword={item.keyword}
                    author={item.author}
                    onClick={onDetail(item.postId)}
                    createdAt={item.createdAt}
                  />
                ))
              : "There are no results"}
          </Row>
          {blog.blog.length > 0 ? (
            <Pagination>
              <Page>
                <Select
                  name="perPage"
                  cy-data-id="per-page"
                  onChange={onChange}
                >
                  <Option>5</Option>
                  <Option>10</Option>
                  <Option>15</Option>
                </Select>
                <Select name="sort" onChange={onChange}>
                  <Option>createdAt</Option>
                  <Option>title</Option>
                  <Option>authorId</Option>
                </Select>
              </Page>
              <Page>
                <PageButton onClick={onPrev} cy-dat-id="prev-page-button">
                  Prev
                </PageButton>
                {state.pageNum}/{blog.len}
                <PageButton onClick={onNext} cy-data-id="next-page-button">
                  Next
                </PageButton>
              </Page>
            </Pagination>
          ) : null}
        </Container>
      </Home>
      <Modal toggle={toggle ? "true" : null}>
        <ModalCard>
          <ModalHeader>{blog.blogDetail?.title}</ModalHeader>
          <ModalBody value={blog.blogDetail?.content} disabled />
          <ModalFooter>
            {blog.blogDetail?.author.username}
            <CloseButton onClick={() => setToggle(!toggle)}>Close</CloseButton>
          </ModalFooter>
        </ModalCard>
      </Modal>
    </>
  );
};
