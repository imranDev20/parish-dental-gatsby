import { useStaticQuery, graphql } from "gatsby";

const useRecentBlogQuery = () => {
  const data = useStaticQuery(graphql`
    query RecentBlogQuery {
      allContentfulBlog(limit: 3, sort: { fields: createdAt, order: DESC }) {
        nodes {
          id
          slug
          title
          createdAt(formatString: "DD MMMM, YYYY", locale: "en-GB")
          updatedAt(formatString: "DD MMMM, YYYY", locale: "en-GB")
          excerpt {
            excerpt
          }
          category
          featuredImage {
            gatsbyImage(width: 400, placeholder: BLURRED)
          }
        }
      }
    }
  `);
  return data?.allContentfulBlog?.nodes;
};

export default useRecentBlogQuery;
