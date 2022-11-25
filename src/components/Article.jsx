import React from "react";
import styled from "styled-components";

const ArticleContainer = styled.article`
  min-width: 200px;

  margin: var(--article-margin);
  background-color: var(--article-background);
  .content-wrapper {
    padding: 20px;
    .link_open-article {
      padding: var(--article-link-margin);
      a {
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    h2 {
      margin: var(--article-heading-margin);
      color: var(--article-heading-color);
      font-size: var(--article-heading-font-size);
    }
    p {
      display: -webkit-box;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: var(--article-text-max-lines);
      line-height: var(--article-paragraph-line-height);
      letter-spacing: var(--article-paragraph-letter-spacing);
      text-overflow: ellipsis;
    }
    img {
      margin: var(--article-image-margin);
      width: var(--article-image-width);
      height: 200px;
      float: right;
    }
  }
`;
function Article() {
  return (
    <>
      <ArticleContainer>
        <div className="content-wrapper">
          <div>
            <img
              src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              alt=""
            />
            <h2>Hello</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis, sint! Animi odio voluptas nam fugit eligendi magnam
              consequatur incidunt quidem? Labore molestiae eum explicabo nisi
              vero quod laborum ipsa quas? Sequi sed consectetur iure, odio ea
              dolore deleniti qui quia soluta maiores tempora molestias deserunt
              aliquid inventore obcaecati commodi illum reprehenderit expedita
              minima quod ad itaque est consequuntur quisquam. Quia! Id ab,
              molestiae aspernatur obcaecati unde dignissimos minima, adipisci
              ipsa excepturi enim cupiditate rem nulla ad est provident dolores
              voluptatum. Eligendi hic soluta suscipit officiis vitae explicabo
              incidunt consectetur nemo. Iure architecto magnam praesentium
              asperiores eligendi suscipit fugit dolore error sunt molestias
              placeat voluptas obcaecati est quaseius ad quidem magni.
              Blanditiis enim, error inventore placeat eligendi expedita ipsum,
              excepturi laboriosam aspernatur beatae adipisci voluptates impedit
              quidem. Commodi eaque assumenda, nam saepe corrupti ab quisquam
              quae.
            </p>
            <div className="link_open-article">
              <a href="#">Read more</a>
            </div>
          </div>
        </div>
      </ArticleContainer>
    </>
  );
}

export default Article;
