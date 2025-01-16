import { defineConfig, s } from "velite";

export default defineConfig({
  collections: {
    posts: {
      name: "Post",
      pattern: "posts/**/*.mdx",
      schema: s.object({
        title: s.string(),
        slug: s.path(),
        date: s.string(),
        code: s.mdx()
      })
    }
  }
});
