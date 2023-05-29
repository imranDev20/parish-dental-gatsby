import React from "react";
import Layout from "../components/global/Layout";
import Seo from "../components/global/Seo";
import { Link } from "gatsby";

import PageHeader from "../components/global/PageHeader";
import useBlogQuery from "../hooks/useBlogQuery";
import { navPages, policyPages } from "../common/constant";

const Sitemap = () => {
  const blogs = useBlogQuery();

  return (
    <Layout>
      <Seo
        title="Sitemap"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      />
      <PageHeader pageTitle="Sitemap" />
      <div className="container mx-auto my-10">
        <h3 className="text-2xl text-gray-500 font-semibold">Pages:</h3>
        <ul className="ml-10 list-disc">
          {navPages.map((item) => (
            <li className="my-1 text-primary underline">
              <Link className="block" to={item.route}>
                {item.name}
              </Link>
            </li>
          ))}
          {policyPages.map((item) => (
            <li className="my-1 text-primary underline">
              <Link className="block" to={`${item.route}`}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <h3 className="text-2xl text-gray-500 font-semibold mt-10">Blogs:</h3>
        <ul className="ml-10 list-disc">
          {blogs.map((item) => (
            <li className="my-1 text-primary underline">
              <Link className="block" to={`/blogs/${item.slug}`}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Sitemap;
