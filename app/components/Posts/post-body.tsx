import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import markdownStyles from '../../styles/markdown-styles.module.css'
import RichTextAsset from '../rich-text-asset'
import styles from '../../../pages/posts/posts.module.css'


const customMarkdownOptions = (content) => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <RichTextAsset
        id={node.data.target.sys.id}
        assets={content.links.assets.block}
      />
    ),
  },
})

export default function PostBody({ content }) {
  const parsedContent = JSON.parse(content);

  return (
    <div className={styles.postbody}>
      <div className={markdownStyles['markdown']}>
        {documentToReactComponents(
          parsedContent,
          customMarkdownOptions(parsedContent)
          )}
      </div>
    </div>
  )
}