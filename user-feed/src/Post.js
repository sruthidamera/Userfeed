import { useState,useEffect } from "react"
const Post = ({PostData,onLike,onComment,onShare}) => {
    const[comment,SetComment]=useState([]);
    return (

    //Post Container
    <div className="w-50 h-100 container d-flex flex-column">
        <div className="row">
           <div className="col-auto">
               <img className="left PostImg" src="https://1.bp.blogspot.com/-siEMkijJ33w/X_as1EqQ7JI/AAAAAAAAETk/pmQ0eR31h_oeT8ONRhOIuBxlHPha93oxgCEwYBhgLKtQDAL1OcqxobF1wN1T7ePZR8syDu10paifExJiElT8TOFEyBU5AdVqZmJi8SyXHMJNoIvkZy1Bk5Ya8TYAVd07EwuNxUJBic7eJ7WBAAdwNtMEYcVp4qnNk-_ihpLoZupuNCG3Txyrj6K3VW2C4UB_AvxMk_4Z2rKZK9faQkco9ulNQJBksnqJvI5z4IPlrz-c8x0kHgfl6qcl0-0jv14qC64sUh8yAY9n37Ago4I0QsU2AUMhGUWy2p4kHUDGyM8b0ZFssEtXgD9Y_HUlMp3IiW6vTS1cDYTRWTWSdfYfXQ2R4daG74fhrTSSo9SPdscSBx83DBWZn8MMAA3gK7KwXiu4gODyZhfXRZBZN7VErNSfkfNd9bxSLH9FF9q5I_o9OrfVjQX0O0OBiA0IMe7mQn1V1tRhx2xjzAUAUx3MIuryQZO-8r-zsewmGP9G47GL3AOGH5ddK-op8ExrNkuae_MeKM_QaCd6r0Y_dwiTEkNauFdq6jiEkWbcTtuca1cNoVZ7QQRmEfvwF_iCWixbFAOvcoNHZVrkv2MHclH3zwvH68tdI3-sP8nbrqhhiYak_uqerMPFYl3h9_8BF6NFpjX7lQjy2ZYkuZIP20TAV5MuaPSH7MMDe2v8F/s1280/awesome%2Bbeautiful%2Bgirl%2Bimage%2Bfor%2Bprofile%2Bpicture.jpg"/></div>
            <p className="col desc"style={{display:"inline"}}><b className="name">Horng H Chen</b>
                    <p className="desc">GAlum | Finance,MBA | 2016 | Business Manager at Capegmini <br/>1d | San Francisco</p>
            </p>
        </div>
        

       <p class="left postsubject">The Concept of Research : A cross-cultural study</p>
        
        <p class="left right">Oxford Nanopore has pulled in 100m from investors in the Asia-Pacific region, as it completes a funding round that values the fast growing UK biotechnology company at $1.5bn.</p>
        <light class="left light">{PostData[0].views} views | {PostData[0].likes} likes | {PostData[0].comments} comments | {PostData[0].shares} shares</ light>
        
        
        <div className="lcs">
        <a href='javascript:;' className="a" onClick={onLike} >like</a>
        <a href='javascript:;' className="a" onClick={onComment}  >comment</a>
        <a href='javascript:;' className="a" onClick={onShare} >share</a></div>
       </div>
        
    )
}
export default Post
