import React from 'react' 
import './NewCollection.css'
import new_collection from '../Assest/new_collections'
import Item from '../Items/Item'

const NewCollection = () => {
  return (
    <div className='new-collection'>
        <h1>LATEST COLLECTION</h1>
        <hr />
        <div className="collections">
            { 
            new_collection.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} img={item.image} new_price={item.new_price} old_price={item.old_price} />
            })

            }
        </div>

      
    </div>
  )
}

export default NewCollection
