import { ChangeEvent, MouseEvent, useState } from "react";
import { useDispatch } from "react-redux";

import { AppActions, AppDispatch, RootState, useAppSelector } from "store";

import { Container, CreateButton, Row } from "./style";
import { FormInput, Loading } from "components";
import { ContentArea } from "components/ContentArea";

export const CreateContainer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const loading = useAppSelector((store: RootState) => store.load.loading);
  const [create, setCreate] = useState({
    title: "",
    content: "",
    keyword: "",
  });
  const [error, setError] = useState({
    title: "",
    content: "",
    keyword: "",
  });
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCreate({ ...create, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" });
  };
  const auth = useAppSelector((state: RootState) => state.auth);
  const onSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setError({
      ...error,
      title: create.title ? "" : "Title is required",
      content: create.content ? "" : "Content is required",
      keyword: create.keyword ? "" : "Keyword is required",
    });
    if (create.title && create.content && create.keyword) {
      dispatch(
        AppActions.blog.createBlogRequest({
          ...create,
          keyword: create.keyword.split(" "),
          authorId: auth.user ? auth.user.id : 0,
        })
      );
      setCreate({
        ...create,
        title: "",
        content: "",
        keyword: "",
      });
    }
  };
  return (
    <Container data-testid="create container">
      {loading ? <Loading /> : null}
      <Row>
        <FormInput
          error={error.title}
          placeholder="Enter title"
          cyDataId="title-input"
          name="title"
          value={create.title}
          onChange={onChange}
        />
        <CreateButton onClick={onSubmit} cy-data-id="submit-button">
          Create Blog
        </CreateButton>
      </Row>
      <FormInput
        error={error.keyword}
        placeholder="Enter keyword(seperate using space)"
        name="keyword"
        cyDataId="keyword-input"
        value={create.keyword}
        onChange={onChange}
      />
      <ContentArea
        placeholder="Enter content"
        name="content"
        cyDataId="content-area"
        value={create.content}
        onChange={onChange}
        error={error.content}
      />
    </Container>
  );
};
