import React from "react";
import { useParams } from "react-router-dom";

function Searchpage(props) {
  const params = useParams();
  const idFind = props.searchImages.find((id) => id.id === params.id);
  console.log(idFind);
  console.log(params);
  return (
    <>
      <div className="individual">
        {idFind && <img src={idFind.urls.small} />}
      </div>
      {/* <Link to={`/sketch/${params.id}`}><button>warholize</button></Link> */}
    </>
  );
}

export default Searchpage;
