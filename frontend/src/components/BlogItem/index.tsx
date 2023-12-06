import { Blog } from "store/types";

import {
  BlogBody,
  BlogContainer,
  BlogFooter,
  BlogHeader,
  Keyword,
  KeywordBar,
  ViewButton,
} from "./style";
import { formatDate } from "utils/formatDate";

interface BlogItemProps extends Blog.BlogItem {
  onClick: () => void;
}
export const BlogCard: React.FC<BlogItemProps> = ({
  title,
  content,
  author,
  onClick,
  keyword,
  createdAt,
}) => {
  return (
    <BlogContainer cy-data-id="blog-item">
      <BlogHeader cy-data-id="blog-title">
        {title}
        <ViewButton onClick={onClick}>View</ViewButton>
      </BlogHeader>
      <BlogBody
        disabled
        defaultValue={`${content.substring(0, 100)}...`}
      ></BlogBody>
      <BlogFooter>
        {author.username}
        <br />
        {formatDate(createdAt)}
        <KeywordBar>
          {keyword.map((item, index) => (
            <Keyword key={index}>{item}</Keyword>
          ))}
        </KeywordBar>
      </BlogFooter>
    </BlogContainer>
  );
};
