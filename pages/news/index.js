import { Fragment } from "react";
import Link from "next/link";

const NewsList = (props) => {
  const getHtml = () => {
    return (
      <Fragment>
        <h1>News Page Component</h1>
        <ul>
          <li>
            <Link href="/news/1">news-1</Link>
          </li>
          <li>
            <Link href="/news/2">news-2</Link>
          </li>
          <li>
            <Link href="/news/3">news-3</Link>
          </li>
        </ul>
      </Fragment>
    );
  };

  return getHtml();
};

export default NewsList;
