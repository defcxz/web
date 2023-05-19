import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function PostBody({ content }) {
   return(
      <div>
         {documentToReactComponents(
            content.json,
         )}
      </div>
   )
}