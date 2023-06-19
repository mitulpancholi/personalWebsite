import { useRouter, NextRouter } from "next/router";
import BlogDetails, {
  BlogDetailsProps,
} from "../../components/blog/blogDetail";

function Blog(): JSX.Element {
  const router: NextRouter = useRouter();
  const data: string = router.query.blog as string;

  const blogDetailsProps: BlogDetailsProps = {
    title : 
  };



  return (
    <>
      <BlogDetails {...blogDetailsProps} />
    </>
  );
}

export default Blog;
