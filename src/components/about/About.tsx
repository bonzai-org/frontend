import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import markdown from '../../../README.md?raw'; // Use ?raw to load the markdown content as raw string

export default function About() {
  const [toc, setToc] = useState([]);

  // Function to extract headers and create table of contents
  const generateTOC = (markdown) => {
    const headers = markdown.match(/^##\s+.+/gm);
    if (headers) {
      const tocEntries = headers.map((header) => {
        const title = header.replace(/^##\s+/, ''); // Remove "##" and extra space
        const id = title.toLowerCase().replace(/\s+/g, '-'); // Create an id from the title
        return { title, id };
      });
      setToc(tocEntries);
    }
  };

  useEffect(() => {
    generateTOC(markdown);
  }, [markdown]);

  return (
    <div>
      <h2>Table of Contents</h2>
      <ul>
        {toc.map(({ title, id }) => (
          <li key={id}>
            <a href={`#${id}`}>{title}</a>
          </li>
        ))}
      </ul>

      <ReactMarkdown
        children={markdown}
        rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings]}
      />
    </div>
  );
}
