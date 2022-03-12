import { Fragment } from "react";
import Link from "next/link";

const NewsList = (props) => {
  const getHtml = () => {
    return (
      <Fragment>
        <h1>News Page Component</h1>
        <ul>
          <li>
            <Link href="/news/1">This is a first news</Link>
          </li>
          <li>
            <Link href="/news/2">This is a second news</Link>
          </li>
          <li>
            <Link href="/news/3">This is a third news</Link>
          </li>
        </ul>
      </Fragment>
    );
  };

  return getHtml();
};

export default NewsList;
