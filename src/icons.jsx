import React from "react";
const base = "inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/15 text-white hover:text-red-400 hover:border-red-500 transition shadow hover:shadow-[0_0_12px_rgba(239,68,68,0.55)]";
export function IconButton({ href, label, children }) {
  return (
    <a aria-label={label} href={href} target="_blank" rel="noopener noreferrer" className={base}>
      {children}
    </a>
  );
}
export function YouTubeIcon(props){return(<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}><path d="M23.5 6.2a4 4 0 0 0-2.8-2.8C18.9 3 12 3 12 3s-6.9 0-8.7.4A4 4 0 0 0 .5 6.2 41.7 41.7 0 0 0 0 12a41.7 41.7 0 0 0 .5 5.8 4 4 0 0 0 2.8 2.8C5.1 21 12 21 12 21s6.9 0 8.7-.4a4 4 0 0 0 2.8-2.8c.3-1.9.5-3.9.5-5.8s-.2-3.9-.5-5.8zM9.7 15.5V8.5L15.8 12l-6.1 3.5z"/></svg>)};
export function XIcon(props){return(<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}><path d="M18.9 2H22L14.6 10.5 23 22h-6.4l-5-6.8L5.8 22H2.6l7.9-9L2 2h6.5l4.6 6.1L18.9 2zm-1.1 18h1.9L8.3 4H6.3l11.5 16z"/></svg>)};
export function InstagramIcon(props){return(<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.8-2.8a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z"/></svg>)};
export function TikTokIcon(props){return(<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}><path d="M12.7 2h3.1a6.3 6.3 0 0 0 3.4 4 6.5 6.5 0 0 0 2.1.6v3.1a9.3 9.3 0 0 1-5.4-1.8v6.9a6.9 6.9 0 1 1-6.9-6.9c.3 0 .6 0 .9.1v3.2a3.8 3.8 0 1 0 3.1 3.7L12.7 2z"/></svg>)};
export function TwitchIcon(props){return(<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}><path d="M4 2L2 6v14h6v2h2l2-2h4l6-6V2H4zm16 10l-3 3h-5l-2 2v-2H6V4h14v8z"/><path d="M14 6h2v5h-2zM10 6h2v5h-2z"/></svg>)};
export function SnapchatIcon(props){return(<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}><path d="M12 2c2.9 0 5 2.2 5 5.1 0 1.3-.3 2.3-.3 2.3s.6.7 1.8 1c.6.1.9.4.9.7s-.3.6-.9.7c-1.1.2-1.8.7-2.2 1.1 0 0 .1.8.8 1.1.5.3 1.3.3 1.6.7.2.2.1.6-.2.8-.7.5-1.9.3-2.9.6-.7.2-1.1.6-1.7 1.2-.8.8-1.7 1.5-2.9 1.5s-2.1-.7-2.9-1.5c-.6-.6-1-.9-1.7-1.2-1-.3-2.2-.1-2.9-.6-.3-.2-.4-.6-.2-.8.3-.4 1.2-.4 1.6-.7.7-.3.8-1.1.8-1.1-.4-.4-1.1-.9-2.2-1.1-.6-.1-.9-.4-.9-.7s.3-.6.9-.7c1.2-.3 1.8-1 1.8-1s-.3-1-.3-2.3C7 4.2 9.1 2 12 2z"/></svg>)};
