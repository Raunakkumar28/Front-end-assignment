export const MovieDetail = ({ props }) => {
    return <div style={{ width: "auto" }}>
        <div className='movieDetail'> {props ? `Episode-` : ""}{props.episode_id} {props.title}</div>
        <p className='details'>{props.opening_crawl}
            <div className='directorDetail'>{props ? `Directed by: ` : ""}{props.director}</div></p>
    </div>
}