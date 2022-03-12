import { useRouter } from "next/router";

const News = (props) => {
  const router = useRouter();
  const newsId = router.query.id;

  const getHtml = () => {
    return <h1>News Page Component for {newsId}</h1>;
  };

  return getHtml();
};

export default News;
