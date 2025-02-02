import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import './styles.css'

interface MarkdownRendererProps {
  content: string
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <div className="prose max-w-none">
      <ReactMarkdown
        className="markdown-content text-zinc-600 dark:text-zinc-300"
        remarkPlugins={[remarkGfm]}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default MarkdownRenderer
