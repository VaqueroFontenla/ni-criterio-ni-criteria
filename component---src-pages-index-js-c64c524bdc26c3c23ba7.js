"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{2618:function(e,t){t.Z=void 0;var n=function(e,t){void 0===t&&(t="start");var n=document.querySelector(e);return!!n&&(n.scrollIntoView({behavior:"smooth",block:t}),!0)};t.Z=n},6558:function(e,t,n){n.r(t);var a=n(7294),i=n(7814),l=n(2618);t.default=function(e){var t=e.data,n=t.allSuggestionsJson.edges.map((function(e){var n=e.node,a=t.allFile.edges.findIndex((function(e){return e.node.relativePath===n.image}));return Object.assign({},n,{image:t.allFile.edges[a].node})}));return a.createElement(a.Fragment,null,a.createElement(i.HJ,{title:t.allSite.edges[0].node.siteMetadata.title}),a.createElement(i.bn,{title:t.allSite.edges[0].node.siteMetadata.title,description:t.allSite.edges[0].node.siteMetadata.description,onClick:function(){return(0,l.Z)("#suggestions")}}),a.createElement(i.Db,{suggestions:n}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-c64c524bdc26c3c23ba7.js.map