const getStars=(l)=>{
    const data=<p className="fa fa-star checked"></p>;
    return [...Array(l)].map(() => data);
  }
 const getEmptyStars=(l)=>{
    let length=10-l;  
    if(length===0){
    return "";
    }
    else{
      const data=<p className="fa fa-star"></p>;
    return [...Array(length)].map(() => data);
    }
  }
export const MovieName=({props,movie})=>{
  return  <div> {props?.map(t => {
        return <table className='table-container'><tr onClick={(e) => movie(e, t)}>

           <td>Episode {t.episode_id}</td>
          <td className='episodeDetail'>Episode {t.episode_id}-{t.title}</td>
          <td className='episodeDetail'>{getStars(t.episode_id)}
              {getEmptyStars(t.episode_id)}</td><td>{t.release_date}</td></tr></table>;
      })}</div>
}