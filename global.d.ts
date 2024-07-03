declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.gif';
declare module '*.svg';

declare module '*.woff';
declare module '*.woff2';
declare module '*.eot';
declare module '*.ttf';
declare module '*.otf';
