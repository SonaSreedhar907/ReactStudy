import React, { useState } from "react";
import { PhonesData } from "./product.data";
import {Card,Button} from "react-bootstrap";

const Product = () => {
  const [items,setItems] = useState(PhonesData)


  const decQty=(id) =>{
      const newItem = items.map((item)=>
        item.id === id && item.qty>1 ?{...item,qty:item.qty-1}:item
      )
      setItems(newItem)
  }; 
  
  const incQty = (id) =>{
    const newItem = items.map((item)=>
      item.id === id?{...item,qty:item.qty+1}:item
    )
    setItems(newItem)
}; 


  return (
    <div>
      <h1 className="bg-info text-white">product</h1>
      {items.map((item)=>(
         <div  className="d-inline-flex" key={item.id}>
            <Card className="shadow p-3 m-2 bg-body-tertiary rounded" style={{ width: "13rem" }}>
            <Card.Img style={{ height: "15rem" }} className="p-2" variant="top" src={require(`./assets/${item.image}.png`)} />
            <Card.Body>
              <Card.Title className="text-info">{item.model}</Card.Title>
              <Card.Text>
                {item.desc}
              </Card.Text>
              <h5>Price :₹ {item.price}</h5>
              <div>
                <p>
                  Qty: <Button className="m-1" onClick={()=>decQty(item.id)}>
                    -
                    </Button>
                    {item.qty}
                    <Button className="m-1" onClick={()=>incQty(item.id)}>+</Button>
                </p>
              </div>
              <Button variant="primary">Add to cart</Button>
            </Card.Body>
          </Card>
         </div>
      ))}
      
    </div>
  );
};

export default Product;
