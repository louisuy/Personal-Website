import Image from 'next/image';

export const serializers = {
  types: {
    image: ({ node: { asset, alt, caption } }) => (
        <Image src={asset.url} alt={alt} width={500} height={500} />
    ),
    code: ({ node: { language, code } }) => (
        <code className={`language-${language}`}>{code}</code>
    ),
  },
  marks: {
    link: ({ children, mark }) => (
      <a href={mark.href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
};
