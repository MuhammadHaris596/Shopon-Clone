import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function Products({title}){
    return(
        <>

       
        <div style={{marginLeft:"10%"}} className="w-100  mt-5  mb-3   ">
        <h4>{title}</h4>
        </div>


     
       
        </>
    )
}






function ProductCard({src,title}) {
  return ( 
   <Card  className='w-100 h-100  justify-content-center  align-items-center' >
    <div style={{width:"90%"}}>
      <Card.Img  className='w-100 object-fit-cover'   src={src} alt={title}  />
      </div>
      <Card.Body>
        <Card.Title style={{lineHeight:"1.5"}} className='text-center'>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;