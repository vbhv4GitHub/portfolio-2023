import rehypeHighlight from 'rehype-highlight';
import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  contentType: 'mdx',
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => post._raw.sourceFileName.replace(/\.mdx$/, ''),
    },
  },
  filePathPattern: '__posts/**/*.mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
    description: { type: 'string', required: true },
    tags: { type: 'json', required: true },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  onUnknownDocuments: 'skip-ignore',
  documentTypes: [Post],
  mdx: { rehypePlugins: [rehypeHighlight] },
});
