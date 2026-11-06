# 新建博客文章

## 新建文件

在 `src/content/blog/` 中新建一个 `.md` 文件，文件名会成为文章网址的一部分。例如 `my-first-note.md` 对应 `/blog/my-first-note/`。可以从 [Markdown 文章模板](blog-post-template.md) 开始；模板保存在 `docs/`，不会被当作博客文章加载。

## 填写 Frontmatter

- `title`：文章标题。
- `description`：简短摘要。
- `pubDate`：发布日期，使用 `YYYY-MM-DD` 格式。
- `updatedDate`：可选；文章后续有实质更新时再填写，未更新时保持注释状态。
- `category`：从 `Life`、`Tech`、`Notes`、`Games` 中选择一个，大小写需一致。
- `heroImage`：可选；将图片放入 `public/`，并填写以 `/` 开头的路径，例如 `/images/cover.jpg`。
- `draft`：新文章先保持 `true`，不会出现在首页、文章列表、详情路由或 RSS。
- `featured`：可选；设为 `true` 后会出现在首页精选文章区，不会随机选取。未设置或设为 `false` 时不进入精选区。

## 预览与检查

本地预览草稿时，先临时将 `draft` 改为 `false`，在项目根目录运行 `npm run dev`，然后打开 `http://localhost:4321/blog/my-first-note/`。如果暂不发布，预览后将 `draft` 改回 `true`；正式发布时则保留 `false`。运行 `npm run check` 可检查 Astro、TypeScript 和 Cloudflare dry-run 构建。

现有示例文章均保留在 `src/content/blog/`，并标记为草稿，不会显示为正式发布内容。
