import hljs from 'highlight.js'
import 'highlight.js/styles/base16/helios.css'

hljs.configure({
  languages: [
    'javascript',
    'json',
    'bash',
    'scss',
    'css',
    'yml',
    'html',
    'sql',
    'typescript',
    'markdown',
    'swift',
    'graphql',
  ],
})

export default function highlightCode() {
  hljs.highlightAll()
}