import { useState, useEffect } from 'react';
import styles from './About.module.css';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeAddClasses from 'rehype-class-names';
import markdown from '../../../README.md?raw'; // Use ?raw to load the markdown content as raw string
import { TOCEntry } from '../../interfaces';

export default function About() {
  const [toc, setToc] = useState<TOCEntry[]>([]);

  // Function to extract headers and create table of contents
  const generateTOC = (markdown: string) => {
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
    <div className={styles.container}>
      <div className={styles.tocWrap}>
        <ul className={styles.toc}>
          {toc.map(({ title, id }) => (
            <li key={id}>
              <a className={styles.tocLink} href={`#${id}`}>
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.markdownContainer}>
        <ReactMarkdown
          children={markdown}
          rehypePlugins={[
            rehypeSlug,
            rehypeAutolinkHeadings,
            [
              rehypeAddClasses,
              {
                h1: styles.aboutHeader,
                h2: styles.aboutHeader,
                h3: styles.aboutHeader,
                h4: styles.aboutHeader,
                h5: styles.aboutHeader,
                h6: styles.aboutHeader
              }
            ]
          ]}
        />
      </div>
    </div>
  );
}
