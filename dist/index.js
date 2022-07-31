#!/usr/bin/env node
(()=>{"use strict";var e={305:function(e,t,n){var l=this&&this.__createBinding||(Object.create?function(e,t,n,l){void 0===l&&(l=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,l,r)}:function(e,t,n,l){void 0===l&&(l=n),e[l]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&l(t,e,n);return r(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(689)),i=n(82),c=u(n(27)),f=u(n(48));t.default=function(){var e=(0,o.useState)(!1),t=e[0],n=e[1];return(0,o.useEffect)((function(){c.default.which("git")&&n(!0)}),[]),t?o.default.createElement(o.default.Fragment,null,o.default.createElement(i.Text,null,"✅ Already installed ",o.default.createElement(i.Text,{color:"red"},"git")),o.default.createElement(f.default,null)):o.default.createElement(i.Text,null,"❎ Please install ",o.default.createElement(i.Text,{color:"red"},"git"),", before start this project.")}},48:function(e,t,n){var l=this&&this.__createBinding||(Object.create?function(e,t,n,l){void 0===l&&(l=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,l,r)}:function(e,t,n,l){void 0===l&&(l=n),e[l]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&l(t,e,n);return r(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(689)),i=n(82),c=u(n(935)),f=u(n(27)),d=u(n(504));t.default=function(){var e=(0,o.useState)(!0),t=e[0],n=e[1];return(0,o.useEffect)((function(){f.default.exec("git clone ".concat("https://github.com/hyesungoh/comet-land"," --depth=1"),{silent:!0},(function(){n(!1)}))}),[]),t?o.default.createElement(i.Box,null,o.default.createElement(i.Box,{marginRight:1},o.default.createElement(i.Text,{color:"green"},o.default.createElement(c.default,null))),o.default.createElement(i.Text,null,"Cloning ",o.default.createElement(i.Text,{color:"blue"},"comet-land"),"...")):o.default.createElement(o.default.Fragment,null,o.default.createElement(i.Text,null,"✅ Clone the ",o.default.createElement(i.Text,{color:"blue"},"comet-land")),o.default.createElement(d.default,null))}},504:function(e,t,n){var l=this&&this.__createBinding||(Object.create?function(e,t,n,l){void 0===l&&(l=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,l,r)}:function(e,t,n,l){void 0===l&&(l=n),e[l]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&l(t,e,n);return r(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(689)),i=n(82),c=u(n(935)),f=u(n(27)),d=u(n(674)),s=[".git",".github/workflows/CI.yml",".github/codecov.yml",".github/CODEOWNERS","LICENSE","CONTRIBUTING.md","CODE_OF_CONDUCT.md"].map((function(e){return"".concat("./comet-land/").concat(e)})).join(" ");t.default=function(){var e=(0,o.useState)(!0),t=e[0],n=e[1];return(0,o.useEffect)((function(){f.default.exec("rm -rf ".concat(s),{silent:!0},(function(){n(!1)}))}),[]),t?o.default.createElement(i.Box,null,o.default.createElement(i.Box,{marginRight:1},o.default.createElement(i.Text,{color:"green"},o.default.createElement(c.default,null))),o.default.createElement(i.Text,null,"Deleting invalid files...")):o.default.createElement(o.default.Fragment,null,o.default.createElement(i.Text,null,"✅ Deleted invalid files"),o.default.createElement(d.default,null))}},674:function(e,t,n){var l=this&&this.__createBinding||(Object.create?function(e,t,n,l){void 0===l&&(l=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,l,r)}:function(e,t,n,l){void 0===l&&(l=n),e[l]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&l(t,e,n);return r(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(689)),i=u(n(147)),c=n(82),f=u(n(930)),d=u(n(253)),s=process.cwd()+"/comet-land",m=[{question:"What is your name?",description:"it will be display at footer",directory:"/packages/core/constants/General/index.ts",line:4,callback:function(e){return"export const authorName = '".concat(e,"';")}},{question:"What is your blog name?",description:"it will be display at blog header",directory:"/apps/blog/_config/index.json",line:2,callback:function(e){return'  "blogName": "'.concat(e,'",')}},{question:"What is your blog description?",description:"it will be display at blog header",directory:"/apps/blog/_config/index.json",line:3,callback:function(e){return'  "blogDescription": "'.concat(e,'",')}},{question:"What is your github repo?",description:'for comment system, please write with "github username/repo name". ex) hyesungoh/comet-land',directory:"/apps/blog/_config/index.json",line:4,callback:function(e){return'  "blogRepo": "'.concat(e,'",')}}];t.default=function(){var e=(0,o.useState)(0),t=e[0],n=e[1],l=(0,o.useState)(""),r=l[0],a=l[1];return m.length>t?o.default.createElement(c.Box,{flexDirection:"column"},o.default.createElement(c.Box,null,o.default.createElement(c.Box,{marginRight:1},o.default.createElement(c.Text,null,m[t].question)),o.default.createElement(f.default,{value:r,onChange:a,onSubmit:function(e){(function(e){var n=m[t].directory,l="".concat(s).concat(n),r=function(e,n){var l=m[t],r=l.line,a=l.callback,u=i.default.readFileSync(n,"utf-8").split("\n");return u[r-1]=a(e),u.join("\n")}(e,l);i.default.writeFileSync(l,r,{encoding:"utf-8"})})(e),a(""),n((function(e){return e+1}))}})),o.default.createElement(c.Text,{dimColor:!0},m[t].description)):o.default.createElement(o.default.Fragment,null,o.default.createElement(c.Text,null,"✅ Done with default configuration!"),o.default.createElement(d.default,null))}},253:function(e,t,n){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(689)),a=n(82);t.default=function(){return r.default.createElement(a.Box,{flexDirection:"column"},r.default.createElement(a.Newline,null),r.default.createElement(a.Text,null,"🎉 Now you can start your own ",r.default.createElement(a.Text,{color:"blue"},"comet-land")," with below command!"),r.default.createElement(a.Newline,null),r.default.createElement(a.Text,null,"cd comet-land"),r.default.createElement(a.Text,null,"yarn"),r.default.createElement(a.Text,null,"yarn dev"),r.default.createElement(a.Text,{dimColor:!0},"then runnin blog at http://localhost:3000, resume at http://localhost:3001"),r.default.createElement(a.Newline,null),r.default.createElement(a.Text,null,"⚒️ Please check below link for find more configuration settings like..."),r.default.createElement(a.Text,{dimColor:!0},"colors, social media accounts, url and"," ",r.default.createElement(a.Text,{inverse:!0,color:"cyan"},"more"),"!"),r.default.createElement(a.Text,{color:"blueBright"},"https://github.com/hyesungoh/comet-land#how-to-configuration"),r.default.createElement(a.Newline,null),r.default.createElement(a.Text,null,"✒️ Posting blog guide is check below link"),r.default.createElement(a.Text,{color:"blueBright"},"https://github.com/hyesungoh/comet-land/blob/main/_docs/en-blog.md"),r.default.createElement(a.Newline,null),r.default.createElement(a.Text,null,"📄 Custom resume guide is check below link"),r.default.createElement(a.Text,{color:"blueBright"},"https://github.com/hyesungoh/comet-land/blob/main/_docs/en-resume.md"),r.default.createElement(a.Newline,null))}},897:function(e,t,n){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(689)),a=n(82),u=l(n(305));t.default=function(){return r.default.createElement(a.Box,{flexDirection:"column"},r.default.createElement(a.Text,null,"Welcome to ",r.default.createElement(a.Text,{color:"blue"},"comet-land")," ☄️ ☄️ ☄️ !",r.default.createElement(a.Newline,null)),r.default.createElement(u.default,null))}},115:function(e,t,n){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(689)),a=n(82),u=l(n(618)),o=l(n(897));(0,u.default)("\n\tUsage\n\t  $ create-comet-land\n\n\tExamples\n\t  $ npx create-comet-land\n"),(0,a.render)(r.default.createElement(o.default,null))},82:e=>{e.exports=require("ink")},935:e=>{e.exports=require("ink-spinner")},930:e=>{e.exports=require("ink-text-input")},618:e=>{e.exports=require("meow")},689:e=>{e.exports=require("react")},27:e=>{e.exports=require("shelljs")},147:e=>{e.exports=require("fs")}},t={};!function n(l){var r=t[l];if(void 0!==r)return r.exports;var a=t[l]={exports:{}};return e[l].call(a.exports,a,a.exports,n),a.exports}(115)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFqQkQsRUFDSCxPQUFPQSxFQUFhTCxRQUdyQixJQUFJRCxFQUFTRyxFQUF5QkUsR0FBWSxDQUdqREosUUFBUyxJQU9WLE9BSEFPLEVBQW9CSCxHQUFVSSxLQUFLVCxFQUFPQyxRQUFTRCxFQUFRQSxFQUFPQyxRQUFTRyxHQUdwRUosRUFBT0MsUUNsQldHLENBQW9CLE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcmVhdGUtY29tZXQtbGFuZC8uL3NvdXJjZS8xX0NoZWNrX0dpdGh1Yi50c3giLCJ3ZWJwYWNrOi8vY3JlYXRlLWNvbWV0LWxhbmQvLi9zb3VyY2UvMl9DbG9uZV9Qcm9qZWN0LnRzeCIsIndlYnBhY2s6Ly9jcmVhdGUtY29tZXQtbGFuZC8uL3NvdXJjZS8zX0RlbGV0ZV9pbnZhbGlkX2ZpbGVzLnRzeCIsIndlYnBhY2s6Ly9jcmVhdGUtY29tZXQtbGFuZC8uL3NvdXJjZS80X0NvbmZpZ3VyYXRpb24udHN4Iiwid2VicGFjazovL2NyZWF0ZS1jb21ldC1sYW5kLy4vc291cmNlLzVfTW9yZV9JbmZvcm1hdGlvbi50c3giLCJ3ZWJwYWNrOi8vY3JlYXRlLWNvbWV0LWxhbmQvLi9zb3VyY2UvQXBwLnRzeCIsIndlYnBhY2s6Ly9jcmVhdGUtY29tZXQtbGFuZC8uL3NvdXJjZS9jbGkudHN4Iiwid2VicGFjazovL2NyZWF0ZS1jb21ldC1sYW5kL2V4dGVybmFsIGNvbW1vbmpzIFwiaW5rXCIiLCJ3ZWJwYWNrOi8vY3JlYXRlLWNvbWV0LWxhbmQvZXh0ZXJuYWwgY29tbW9uanMgXCJpbmstc3Bpbm5lclwiIiwid2VicGFjazovL2NyZWF0ZS1jb21ldC1sYW5kL2V4dGVybmFsIGNvbW1vbmpzIFwiaW5rLXRleHQtaW5wdXRcIiIsIndlYnBhY2s6Ly9jcmVhdGUtY29tZXQtbGFuZC9leHRlcm5hbCBjb21tb25qcyBcIm1lb3dcIiIsIndlYnBhY2s6Ly9jcmVhdGUtY29tZXQtbGFuZC9leHRlcm5hbCBjb21tb25qcyBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY3JlYXRlLWNvbWV0LWxhbmQvZXh0ZXJuYWwgY29tbW9uanMgXCJzaGVsbGpzXCIiLCJ3ZWJwYWNrOi8vY3JlYXRlLWNvbWV0LWxhbmQvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImZzXCIiLCJ3ZWJwYWNrOi8vY3JlYXRlLWNvbWV0LWxhbmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY3JlYXRlLWNvbWV0LWxhbmQvd2VicGFjay9zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJ2luayc7XG5pbXBvcnQgc2hlbGwgZnJvbSAnc2hlbGxqcyc7XG5cbmltcG9ydCBDbG9uZVByb2plY3QgZnJvbSAnLi8yX0Nsb25lX1Byb2plY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGVja0dpdGh1YigpIHtcbiAgY29uc3QgW2lzQ2hlY2tlZEdpdEluc3RhbGxlZCwgc2V0SXNDaGVja2VkR2l0SW5zdGFsbGVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzaGVsbC53aGljaCgnZ2l0JykpIHtcbiAgICAgIHNldElzQ2hlY2tlZEdpdEluc3RhbGxlZCh0cnVlKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBpZiAoIWlzQ2hlY2tlZEdpdEluc3RhbGxlZClcbiAgICByZXR1cm4gKFxuICAgICAgPFRleHQ+XG4gICAgICAgIOKdjiBQbGVhc2UgaW5zdGFsbCA8VGV4dCBjb2xvcj1cInJlZFwiPmdpdDwvVGV4dD4sIGJlZm9yZSBzdGFydCB0aGlzIHByb2plY3QuXG4gICAgICA8L1RleHQ+XG4gICAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8VGV4dD5cbiAgICAgICAg4pyFIEFscmVhZHkgaW5zdGFsbGVkIDxUZXh0IGNvbG9yPVwicmVkXCI+Z2l0PC9UZXh0PlxuICAgICAgPC9UZXh0PlxuXG4gICAgICA8Q2xvbmVQcm9qZWN0IC8+XG4gICAgPC8+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJ2luayc7XG5pbXBvcnQgU3Bpbm5lciBmcm9tICdpbmstc3Bpbm5lcic7XG5pbXBvcnQgc2hlbGwgZnJvbSAnc2hlbGxqcyc7XG5cbmltcG9ydCBEZWxldGVJbnZhbGlkRmlsZXMgZnJvbSAnLi8zX0RlbGV0ZV9pbnZhbGlkX2ZpbGVzJztcblxuY29uc3QgUkVQT19VUkwgPSAnaHR0cHM6Ly9naXRodWIuY29tL2h5ZXN1bmdvaC9jb21ldC1sYW5kJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xvbmVQcm9qZWN0KCkge1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzaGVsbC5leGVjKGBnaXQgY2xvbmUgJHtSRVBPX1VSTH0gLS1kZXB0aD0xYCwgeyBzaWxlbnQ6IHRydWUgfSwgKCkgPT4ge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGlmIChpc0xvYWRpbmcpXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3g+XG4gICAgICAgIDxCb3ggbWFyZ2luUmlnaHQ9ezF9PlxuICAgICAgICAgIDxUZXh0IGNvbG9yPVwiZ3JlZW5cIj5cbiAgICAgICAgICAgIDxTcGlubmVyIC8+XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cblxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICBDbG9uaW5nIDxUZXh0IGNvbG9yPVwiYmx1ZVwiPmNvbWV0LWxhbmQ8L1RleHQ+Li4uXG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgICk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRleHQ+XG4gICAgICAgIOKchSBDbG9uZSB0aGUgPFRleHQgY29sb3I9XCJibHVlXCI+Y29tZXQtbGFuZDwvVGV4dD5cbiAgICAgIDwvVGV4dD5cblxuICAgICAgPERlbGV0ZUludmFsaWRGaWxlcyAvPlxuICAgIDwvPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICdpbmsnO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAnaW5rLXNwaW5uZXInO1xuaW1wb3J0IHNoZWxsIGZyb20gJ3NoZWxsanMnO1xuXG5pbXBvcnQgQ29uZmlndXJhdGlvbiBmcm9tICcuLzRfQ29uZmlndXJhdGlvbic7XG5cbmNvbnN0IEJBU0VfRElSRUNUT1JZID0gJy4vY29tZXQtbGFuZC8nO1xuXG5jb25zdCBJTlZBTElEX0ZJTEVTID0gW1xuICAnLmdpdCcsXG4gICcuZ2l0aHViL3dvcmtmbG93cy9DSS55bWwnLFxuICAnLmdpdGh1Yi9jb2RlY292LnltbCcsXG4gICcuZ2l0aHViL0NPREVPV05FUlMnLFxuICAnTElDRU5TRScsXG4gICdDT05UUklCVVRJTkcubWQnLFxuICAnQ09ERV9PRl9DT05EVUNULm1kJyxcbl0gYXMgY29uc3Q7XG5cbmNvbnN0IERFTEVURV9GSUxFUyA9IElOVkFMSURfRklMRVMubWFwKGRpcmVjdG9yeSA9PiBgJHtCQVNFX0RJUkVDVE9SWX0ke2RpcmVjdG9yeX1gKS5qb2luKCcgJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbGV0ZUludmFsaWRGaWxlcygpIHtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2hlbGwuZXhlYyhgcm0gLXJmICR7REVMRVRFX0ZJTEVTfWAsIHsgc2lsZW50OiB0cnVlIH0sICgpID0+IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICBpZiAoaXNMb2FkaW5nKVxuICAgIHJldHVybiAoXG4gICAgICA8Qm94PlxuICAgICAgICA8Qm94IG1hcmdpblJpZ2h0PXsxfT5cbiAgICAgICAgICA8VGV4dCBjb2xvcj1cImdyZWVuXCI+XG4gICAgICAgICAgICA8U3Bpbm5lciAvPlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgPFRleHQ+RGVsZXRpbmcgaW52YWxpZCBmaWxlcy4uLjwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgICk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRleHQ+4pyFIERlbGV0ZWQgaW52YWxpZCBmaWxlczwvVGV4dD5cblxuICAgICAgPENvbmZpZ3VyYXRpb24gLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICdpbmsnO1xuaW1wb3J0IFRleHRJbnB1dCBmcm9tICdpbmstdGV4dC1pbnB1dCc7XG5cbmltcG9ydCBNb3JlSW5mb3JtYXRpb24gZnJvbSAnLi81X01vcmVfSW5mb3JtYXRpb24nO1xuXG5jb25zdCBESVJOQU1FID0gcHJvY2Vzcy5jd2QoKSArICcvY29tZXQtbGFuZCc7XG5cbmludGVyZmFjZSBJQ29uZmlndXJhdGlvbiB7XG4gIHF1ZXN0aW9uOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCBudWxsO1xuICBkaXJlY3Rvcnk6IHN0cmluZztcbiAgbGluZTogbnVtYmVyO1xuICBjYWxsYmFjazogKHZhbHVlOiBzdHJpbmcpID0+IHN0cmluZztcbn1cblxuY29uc3QgY29uZmlndXJhdGlvbnM6IElDb25maWd1cmF0aW9uW10gPSBbXG4gIHtcbiAgICBxdWVzdGlvbjogJ1doYXQgaXMgeW91ciBuYW1lPycsXG4gICAgZGVzY3JpcHRpb246ICdpdCB3aWxsIGJlIGRpc3BsYXkgYXQgZm9vdGVyJyxcbiAgICBkaXJlY3Rvcnk6ICcvcGFja2FnZXMvY29yZS9jb25zdGFudHMvR2VuZXJhbC9pbmRleC50cycsXG4gICAgbGluZTogNCxcbiAgICBjYWxsYmFjazogKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiBgZXhwb3J0IGNvbnN0IGF1dGhvck5hbWUgPSAnJHt2YWx1ZX0nO2A7XG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHF1ZXN0aW9uOiAnV2hhdCBpcyB5b3VyIGJsb2cgbmFtZT8nLFxuICAgIGRlc2NyaXB0aW9uOiAnaXQgd2lsbCBiZSBkaXNwbGF5IGF0IGJsb2cgaGVhZGVyJyxcbiAgICBkaXJlY3Rvcnk6ICcvYXBwcy9ibG9nL19jb25maWcvaW5kZXguanNvbicsXG4gICAgbGluZTogMixcbiAgICBjYWxsYmFjazogKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiBgICBcImJsb2dOYW1lXCI6IFwiJHt2YWx1ZX1cIixgO1xuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBxdWVzdGlvbjogJ1doYXQgaXMgeW91ciBibG9nIGRlc2NyaXB0aW9uPycsXG4gICAgZGVzY3JpcHRpb246ICdpdCB3aWxsIGJlIGRpc3BsYXkgYXQgYmxvZyBoZWFkZXInLFxuICAgIGRpcmVjdG9yeTogJy9hcHBzL2Jsb2cvX2NvbmZpZy9pbmRleC5qc29uJyxcbiAgICBsaW5lOiAzLFxuICAgIGNhbGxiYWNrOiAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgcmV0dXJuIGAgIFwiYmxvZ0Rlc2NyaXB0aW9uXCI6IFwiJHt2YWx1ZX1cIixgO1xuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBxdWVzdGlvbjogJ1doYXQgaXMgeW91ciBnaXRodWIgcmVwbz8nLFxuICAgIGRlc2NyaXB0aW9uOiAnZm9yIGNvbW1lbnQgc3lzdGVtLCBwbGVhc2Ugd3JpdGUgd2l0aCBcImdpdGh1YiB1c2VybmFtZS9yZXBvIG5hbWVcIi4gZXgpIGh5ZXN1bmdvaC9jb21ldC1sYW5kJyxcbiAgICBkaXJlY3Rvcnk6ICcvYXBwcy9ibG9nL19jb25maWcvaW5kZXguanNvbicsXG4gICAgbGluZTogNCxcbiAgICBjYWxsYmFjazogKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiBgICBcImJsb2dSZXBvXCI6IFwiJHt2YWx1ZX1cIixgO1xuICAgIH0sXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb25maWd1cmF0aW9uKCkge1xuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG4gIGNvbnN0IFtlYWNoVmFsdWUsIHNldEVhY2hWYWx1ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcblxuICBmdW5jdGlvbiBjbGVhckVhY2hWYWx1ZSgpIHtcbiAgICBzZXRFYWNoVmFsdWUoJycpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UmVwbGFjZWRGaWxlKHZhbHVlOiBzdHJpbmcsIGZpbGVQYXRoOiBzdHJpbmcpIHtcbiAgICBjb25zdCB7IGxpbmUsIGNhbGxiYWNrIH0gPSBjb25maWd1cmF0aW9uc1tpbmRleF07XG4gICAgY29uc3QgYmVmb3JlRmlsZSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCwgJ3V0Zi04Jykuc3BsaXQoJ1xcbicpO1xuICAgIGJlZm9yZUZpbGVbbGluZSAtIDFdID0gY2FsbGJhY2sodmFsdWUpO1xuICAgIGNvbnN0IHJlcGxhY2VkRmlsZSA9IGJlZm9yZUZpbGUuam9pbignXFxuJyk7XG4gICAgcmV0dXJuIHJlcGxhY2VkRmlsZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcGxhY2VGaWxlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCB7IGRpcmVjdG9yeSB9ID0gY29uZmlndXJhdGlvbnNbaW5kZXhdO1xuICAgIGNvbnN0IGZpbGVQYXRoID0gYCR7RElSTkFNRX0ke2RpcmVjdG9yeX1gO1xuICAgIGNvbnN0IHJlcGxhY2VkRmlsZSA9IGdldFJlcGxhY2VkRmlsZSh2YWx1ZSwgZmlsZVBhdGgpO1xuXG4gICAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgcmVwbGFjZWRGaWxlLCB7IGVuY29kaW5nOiAndXRmLTgnIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gb25TdWJtaXQodmFsdWU6IHN0cmluZykge1xuICAgIHJlcGxhY2VGaWxlKHZhbHVlKTtcbiAgICBjbGVhckVhY2hWYWx1ZSgpO1xuICAgIHNldEluZGV4KHByZXYgPT4gcHJldiArIDEpO1xuICB9XG5cbiAgaWYgKGNvbmZpZ3VyYXRpb25zLmxlbmd0aCA+IGluZGV4KVxuICAgIHJldHVybiAoXG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgPEJveD5cbiAgICAgICAgICA8Qm94IG1hcmdpblJpZ2h0PXsxfT5cbiAgICAgICAgICAgIDxUZXh0Pntjb25maWd1cmF0aW9uc1tpbmRleF0ucXVlc3Rpb259PC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxUZXh0SW5wdXQgdmFsdWU9e2VhY2hWYWx1ZX0gb25DaGFuZ2U9e3NldEVhY2hWYWx1ZX0gb25TdWJtaXQ9e29uU3VibWl0fSAvPlxuICAgICAgICA8L0JveD5cblxuICAgICAgICA8VGV4dCBkaW1Db2xvcj57Y29uZmlndXJhdGlvbnNbaW5kZXhdLmRlc2NyaXB0aW9ufTwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgICk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRleHQ+4pyFIERvbmUgd2l0aCBkZWZhdWx0IGNvbmZpZ3VyYXRpb24hPC9UZXh0PlxuICAgICAgPE1vcmVJbmZvcm1hdGlvbiAvPlxuICAgIDwvPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgTmV3bGluZSwgVGV4dCB9IGZyb20gJ2luayc7XG5cbmNvbnN0IENPTkZJR1VSQVRJT05fR1VJREUgPSAnaHR0cHM6Ly9naXRodWIuY29tL2h5ZXN1bmdvaC9jb21ldC1sYW5kI2hvdy10by1jb25maWd1cmF0aW9uJztcbmNvbnN0IEVOX0JMT0dfUE9TVF9HVUlERSA9ICdodHRwczovL2dpdGh1Yi5jb20vaHllc3VuZ29oL2NvbWV0LWxhbmQvYmxvYi9tYWluL19kb2NzL2VuLWJsb2cubWQnO1xuY29uc3QgRU5fUkVTVU1FX0dVSURFID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9oeWVzdW5nb2gvY29tZXQtbGFuZC9ibG9iL21haW4vX2RvY3MvZW4tcmVzdW1lLm1kJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9yZUluZm9ybWF0aW9uKCkge1xuICByZXR1cm4gKFxuICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgPE5ld2xpbmUgLz5cbiAgICAgIDxUZXh0PlxuICAgICAgICDwn46JIE5vdyB5b3UgY2FuIHN0YXJ0IHlvdXIgb3duIDxUZXh0IGNvbG9yPVwiYmx1ZVwiPmNvbWV0LWxhbmQ8L1RleHQ+IHdpdGggYmVsb3cgY29tbWFuZCFcbiAgICAgIDwvVGV4dD5cbiAgICAgIDxOZXdsaW5lIC8+XG4gICAgICA8VGV4dD5jZCBjb21ldC1sYW5kPC9UZXh0PlxuICAgICAgPFRleHQ+eWFybjwvVGV4dD5cbiAgICAgIDxUZXh0Pnlhcm4gZGV2PC9UZXh0PlxuICAgICAgPFRleHQgZGltQ29sb3I+dGhlbiBydW5uaW4gYmxvZyBhdCBodHRwOi8vbG9jYWxob3N0OjMwMDAsIHJlc3VtZSBhdCBodHRwOi8vbG9jYWxob3N0OjMwMDE8L1RleHQ+XG4gICAgICA8TmV3bGluZSAvPlxuXG4gICAgICA8VGV4dD7impLvuI8gUGxlYXNlIGNoZWNrIGJlbG93IGxpbmsgZm9yIGZpbmQgbW9yZSBjb25maWd1cmF0aW9uIHNldHRpbmdzIGxpa2UuLi48L1RleHQ+XG4gICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgY29sb3JzLCBzb2NpYWwgbWVkaWEgYWNjb3VudHMsIHVybCBhbmR7JyAnfVxuICAgICAgICA8VGV4dCBpbnZlcnNlIGNvbG9yPVwiY3lhblwiPlxuICAgICAgICAgIG1vcmVcbiAgICAgICAgPC9UZXh0PlxuICAgICAgICAhXG4gICAgICA8L1RleHQ+XG4gICAgICA8VGV4dCBjb2xvcj1cImJsdWVCcmlnaHRcIj57Q09ORklHVVJBVElPTl9HVUlERX08L1RleHQ+XG4gICAgICA8TmV3bGluZSAvPlxuXG4gICAgICA8VGV4dD7inJLvuI8gUG9zdGluZyBibG9nIGd1aWRlIGlzIGNoZWNrIGJlbG93IGxpbms8L1RleHQ+XG4gICAgICA8VGV4dCBjb2xvcj1cImJsdWVCcmlnaHRcIj57RU5fQkxPR19QT1NUX0dVSURFfTwvVGV4dD5cbiAgICAgIDxOZXdsaW5lIC8+XG5cbiAgICAgIDxUZXh0PvCfk4QgQ3VzdG9tIHJlc3VtZSBndWlkZSBpcyBjaGVjayBiZWxvdyBsaW5rPC9UZXh0PlxuICAgICAgPFRleHQgY29sb3I9XCJibHVlQnJpZ2h0XCI+e0VOX1JFU1VNRV9HVUlERX08L1RleHQ+XG4gICAgICA8TmV3bGluZSAvPlxuICAgIDwvQm94PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgTmV3bGluZSwgVGV4dCB9IGZyb20gJ2luayc7XG5cbmltcG9ydCBDaGVja0dpdGh1YiBmcm9tICcuLzFfQ2hlY2tfR2l0aHViJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgPFRleHQ+XG4gICAgICAgIFdlbGNvbWUgdG8gPFRleHQgY29sb3I9XCJibHVlXCI+Y29tZXQtbGFuZDwvVGV4dD4g4piE77iPIOKYhO+4jyDimITvuI8gIVxuICAgICAgICA8TmV3bGluZSAvPlxuICAgICAgPC9UZXh0PlxuXG4gICAgICA8Q2hlY2tHaXRodWIgLz5cbiAgICA8L0JveD5cbiAgKTtcbn1cbiIsIiMhL3Vzci9iaW4vZW52IG5vZGVcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdpbmsnO1xuaW1wb3J0IG1lb3cgZnJvbSAnbWVvdyc7XG5cbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xuXG5tZW93KFxuICBgXG5cdFVzYWdlXG5cdCAgJCBjcmVhdGUtY29tZXQtbGFuZFxuXG5cdEV4YW1wbGVzXG5cdCAgJCBucHggY3JlYXRlLWNvbWV0LWxhbmRcbmBcbik7XG5cbnJlbmRlcig8QXBwIC8+KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbmstc3Bpbm5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbmstdGV4dC1pbnB1dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZW93XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNoZWxsanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMTUpO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiaXNDaGVja2VkR2l0SW5zdGFsbGVkIiwic2V0SXNDaGVja2VkR2l0SW5zdGFsbGVkIiwidXNlRWZmZWN0Iiwid2hpY2giLCJUZXh0IiwiY29sb3IiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJleGVjIiwic2lsZW50IiwiQm94IiwibWFyZ2luUmlnaHQiLCJERUxFVEVfRklMRVMiLCJtYXAiLCJkaXJlY3RvcnkiLCJqb2luIiwiRElSTkFNRSIsInByb2Nlc3MiLCJjd2QiLCJjb25maWd1cmF0aW9ucyIsInF1ZXN0aW9uIiwiZGVzY3JpcHRpb24iLCJsaW5lIiwiY2FsbGJhY2siLCJ2YWx1ZSIsImluZGV4Iiwic2V0SW5kZXgiLCJlYWNoVmFsdWUiLCJzZXRFYWNoVmFsdWUiLCJsZW5ndGgiLCJmbGV4RGlyZWN0aW9uIiwib25DaGFuZ2UiLCJvblN1Ym1pdCIsImZpbGVQYXRoIiwicmVwbGFjZWRGaWxlIiwiYmVmb3JlRmlsZSIsInJlYWRGaWxlU3luYyIsInNwbGl0IiwiZ2V0UmVwbGFjZWRGaWxlIiwid3JpdGVGaWxlU3luYyIsImVuY29kaW5nIiwicmVwbGFjZUZpbGUiLCJwcmV2IiwiZGltQ29sb3IiLCJOZXdsaW5lIiwiaW52ZXJzZSIsInJlbmRlciIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsImNhbGwiXSwic291cmNlUm9vdCI6IiJ9