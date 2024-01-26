// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {id, title, description, publishedDate} = blogItemDetails

  return (
    <li className="list-cont">
      <div className="title-date-cont">
        <h1 className="title">{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      <hr className="hr-line" />
    </li>
  )
}

export default BlogItem
