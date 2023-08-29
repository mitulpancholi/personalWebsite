import { useRouter, NextRouter } from "next/router";
import BlogDetails, { BlogDetailsProps } from "../../components/blog/blogDetail";

function Blog(): JSX.Element {
  const router: NextRouter = useRouter();
  const data: string = router.query.blog as string;

  const blogDetailsProps: BlogDetailsProps = {
    title: "The Day the earth stood still, and it kept holding up",
    metaTitle: "Hello-World",
    metaDescription: "This is the first blog post of this website",
    slug: "hello-world",
    author: "Mitul Pancholi",
    mainImage: "https://www.google.com",
    altText: "some Alt Text",
    categories: ["AI", "Machine Learning"],
    shortDescription:
      "      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ea repellendus aliquam. Libero distinctio sed, aliquam doloremque fugiat nobis eveniet laboriosam minima consequatur ea optio odio. Odio eveniet cum suscipit, adipisci nulla saepe ex reprehenderit, eius voluptas deleniti maxime ipsum facilis. Temporibus nisi quod reprehenderit, sequi maiores qui, explicabo culpa, quos harum cumque ex praesentium voluptas necessitatibus ratione saepe veniam beatae nam voluptate autem magni. Explicabo itaque accusamus distinctio dolores dolorem quasi, officia iusto magnam unde. Sapiente tempora voluptatum ducimus magni sit pariatur, praesentium asperiores! Accusamus ducimus, deleniti minus, asperiores aperiam, dolor corporis officia repellendus blanditiis in corrupti molestiae id.    ",
    body: "",
  };

  return (
    <>
      <BlogDetails {...blogDetailsProps} />
    </>
  );
}

export default Blog;
