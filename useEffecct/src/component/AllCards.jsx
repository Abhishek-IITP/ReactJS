

function AllCards({data}) {
  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {data.map((singleItem)=>(
                  <div
                  key={singleItem.id}
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    maxWidth: "350px",
                    minHeight: "350px",
                    marginTop: "1rem",
                    overflow:"hidden",
                    padding:"rem"
                  }}
                >
                  <img src={singleItem.thumbnail} alt="" />
                  <h2>Name:-{singleItem.brand}</h2>
                  <p> <b> Price:-</b>${singleItem.price}</p>
                  <p>
                    <b>Description :-</b>
                    {singleItem.description}
                  </p>
                </div>
        ))}

      
    </div>
  );
}

export default AllCards;
