import styled from "styled-components";
import { Link } from "react-router-dom";
import { Github } from "@styled-icons/boxicons-logos/Github";

export const About = () => {
  const SGithub = styled(Github)`
    width: 30px;
  `;
  return (
    <>
      <h2>nPadについて</h2>
      <p>簡単に付箋を作成できるアプリになります。</p>
      <h2>使用技術</h2>
      <ul>
        <li>TypeScript</li>
        <li>styled-components</li>
      </ul>
      <h2>Github</h2>
      <SLink
        to={{
          pathname: "https://github.com/takahiro-okada/typescript-notepad",
        }}
        target="_blank"
      >
        <SGithub />
        ソースコードはこちらで公開しております
      </SLink>
    </>
  );
};
const SLink = styled(Link)`
  background-color: #f6f8fa;
  color: #333;
  padding: 1rem 1rem;
  border-radius: 10px;
`;
