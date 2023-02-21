// 'https://dummyjson.com/products/1'


import React from 'react'

function details({data}) {
  return (
    <div>
      <h2>{data.title}</h2>
      <h3>{data.brand}</h3>
      <img src={data.thumbnail} alt={data.title} />
    </div>
  )
}

export default details



export async function getServerSideProps({ params: { id } }) {


    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data =  await res.json();
    return {
      props: { data },
    };
  }