import styles from './Blog.module.css';

const blog = ({id,title,url,content}) => {
    return (
        <div className={styles.card}>
        <div >
            <li >
                <img src={url} alt={title} className={styles.img}/>
                <h2>{title}</h2>
                <p>{content}</p>
            </li>
        </div>
        </div>
    )
}

export default blog;