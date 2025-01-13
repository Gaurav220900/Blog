import styles from './Blog.module.css';

const blog = ({id,title,url,content}) => {
    return (
        <li className='styles.blog'>
            <div>
                <img src={url} alt={title} />
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </li>
    )
}

export default blog;