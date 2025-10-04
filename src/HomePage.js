import { Link } from "react-router-dom";
import { useState, useEffect, useReducer} from 'react';
import reducer from './OrderButton'
import './styles.css'

export default function HomePage() {

      const [cart, setCart] = useState(null);
      const [hover, setHover] = useState({Rose:null, Pentstemon: null, Eucalyptus:null, ItalianRuscus: null, Delphinium: null, Tulip: null, Lily: null, Cymbidium:null, Chrysanthemum: null});
      const [info, setInfo] = useState({Rose:null, Pentstemon: null, Eucalyptus:null, ItalianRuscus: null, Delphinium: null, Tulip: null, Lily: null, Cymbidium:null, Chrysanthemum: null});
      const [flowerState, dispatch] = useReducer(reducer, { Rose: 0, Pentstemon: 0, Eucalyptus:0, ItalianRuscus:0, Delphinium: 0, Tulip: 0, Lily: 0, Cymbidium:0, Chrysanthemum: 0});
      const [flowerQueue, setFlowerQueue] = useState([]);

      const PriceChart = {
        Rose: 15,
        Pentstemon: 15,
        Eucalyptus: 15,
        ItalianRuscus:15,
        Delphinium: 16,
        Tulip: 16,
        Lily: 17,
        Cymbidium: 18,
        Chrysanthemum: 18,
      }

      const FlowerImages = {
        Rose: "Rose.png",
        Pentstemon: "Pentstemon.png",
        Eucalyptus: "Eucalyptus.png",
        ItalianRuscus:"ItalianRuscus.png",
        Delphinium: "Delphinium.png",
        Tulip: "Tulip.png",
        Lily: "Lily.png",
        Cymbidium: "Cymbidium.png",
        Chrysanthemum: "Chrysanthemum.png",
      }


    
    const addCalories = Object.entries(flowerState)
       .filter(([Name, num]) => num > 0)
       .map(([Name, num]) => PriceChart[Name] * num)
       .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
    
      let selectList = []
    const randomization = () => {
        for(let i=0; i<4; i++){
        const key = Object.keys(PriceChart)
        const randomgenerator = key[Math.floor(Math.random() * key.length)];
       selectList.push(randomgenerator)
        }
       selectList.forEach(key => {
        dispatch({type: 'increment', flowerChoice: key});
        setFlowerQueue(flowerQueue => [...flowerQueue, key])
     });
    }

    const handleReset = () => {
        dispatch({type: 'reset'})
        setFlowerQueue([])
    }
       
    const mappingImage = flowerQueue
    .filter((Name,i) => i < 4)
    .map((Name,i)=><img key={i} src={FlowerImages[Name]} alt="FlowerName" className={`flower-img flower-${i}`}/>)

    const cartReveal = cart ? Object.entries(flowerState)
          .filter(([Name, amount]) => amount > 0)
          .map(([Name, amount]) => <p style = {{
            fontSize:"13px", margin:"2%", fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri", justifyContent:"left", padding:"5%", border: "1px, dashed, rgb(2, 49, 17)", width: "100%"
          }} 
          key={Name}>{Name}:{amount}</p>) : null
    
   
      return(
        <>
        <div className = "parentContainer">
        <div className = "top">
        <span id = "title">Bouquet Customization</span>
        <span id = "subtitle">Select from a wide range of blooms, add your personal touch, and enjoy same-day delivery of your unique bouquet.</span>
        </div>
        <div className = "Order">
        <div className = "container">
        <div className = "flowerGrid">
        <div className = "flowerWrapper">
        <div className="flowerItem">
        <img id = "imageShow" src="Rose/pic.jpg" alt="RosePhoto"></img>
        <div className = "NamePrice">
        <span>  Rose {flowerState.Rose} </span>
        <span id = "Price">$15</span>
        </div> 

        <div className = "infoWrapperBox" style={{ position: 'relative' }}>
        <p id = "More"
        onMouseEnter={() => setHover({...hover, Rose:true})}
        onMouseLeave={() => setHover({...hover, Rose:false})}
        onClick={() => setInfo({...info, Rose:!info.Rose})}
        style ={{color : hover.Rose? 'rosybrown':'black', textDecoration: hover && 'underline'}}>More</p>
        {info.Rose? <p id = "Clarification">The rose, timeless and fragrant, symbolizes love, beauty, and elegance across cultures</p>:null}
        </div>

        <div className="buttonGroup">
        <button id = "button1" onClick={
            () =>{dispatch({type: 'increment', flowerChoice:'Rose'})
            setFlowerQueue(flowerQueue => {
                const indexFull = flowerQueue.lastIndexOf('Rose');
                if(indexFull < 3) return [...flowerQueue, 'Rose'];
                return flowerQueue;})}
           }>+</button>
           <button id = "button2" onClick={
            () =>{dispatch({type: 'decrement', flowerChoice:'Rose'})
            setFlowerQueue(flowerQueue => {
                const index = flowerQueue.lastIndexOf('Rose');
                if (index === -1) return flowerQueue
                return flowerQueue.filter((_, i) => i !== index)
              })
            }}>-</button>
        </div>
      
        </div>
    
        <div className="flowerItem">
        <img id = "imageShow" src="Pentstemon/pic.png"  alt="PentstemonPhoto"></img>
        <div className = "NamePrice">
        <span>  Pentstemon {flowerState.Pentstemon} </span> 
        <span id = "Price">$15</span>
        </div>

        <div className = "infoWrapperBox" style={{ position: 'relative' }}>
        <p id = "More"
        onMouseEnter={() => setHover({...hover, Pentstemon:true})}
        onMouseLeave={() => setHover({...hover, Pentstemon:false})}
        onClick={() => setInfo({...info, Pentstemon:!info.Pentstemon})}
        style ={{color : hover.Pentstemon? 'rosybrown':'black', textDecoration: hover && 'underline'}}>More</p>
        {info.Pentstemon? <p id = "Clarification">Vibrant tubular blooms attract hummingbirds, adding wild charm and enduring beauty to gardens.</p>:null}
        </div>

        <div className="buttonGroup">
        <button id = "button1" onClick={
            () =>{dispatch({type: 'increment', flowerChoice:'Pentstemon'})
            setFlowerQueue(flowerQueue => {
                const indexFull = flowerQueue.lastIndexOf('Pentstemon');
                if(indexFull < 3) return [...flowerQueue, 'Pentstemon'];
                return flowerQueue;})}
           }>+</button>
           <button id = "button2" onClick={
            () =>{dispatch({type: 'decrement', flowerChoice:'Pentstemon'})
            setFlowerQueue(flowerQueue => {
                const index = flowerQueue.lastIndexOf('Pentstemon');
                if (index === -1) return flowerQueue 
                return flowerQueue.filter((_, i) => i !== index)
              })
           }}>-</button>

        </div>
    
    </div>
    <div className="flowerItem">
    <img id = "imageShow" src="Eucalyptus/pic.jpg" alt="EucalyptusPhoto"></img>
    <div className = "NamePrice">
    <span>  Eucalyptus {flowerState.Eucalyptus} </span> 
    <span id = "Price">$15</span>
    </div>

    <div className = "infoWrapperBox" style={{ position: 'relative' }}>
        <p id = "More"
        onMouseEnter={() => setHover({...hover, Eucalyptus:true})}
        onMouseLeave={() => setHover({...hover, Eucalyptus:false})}
        onClick={() => setInfo({...info, Eucalyptus:!info.Eucalyptus})}
        style ={{color : hover.Eucalyptus? 'rosybrown':'black', textDecoration: hover && 'underline'}}>More</p>
        {info.Eucalyptus? <p id = "Clarification">Silvery aromatic leaves embody calm, freshness, and natural elegance in floral arrangements. </p>:null}
        </div>

    <div className="buttonGroup">
    <button id = "button1" onClick={
            () =>{dispatch({type: 'increment', flowerChoice:'Eucalyptus'})
            setFlowerQueue(flowerQueue => {
                const indexFull = flowerQueue.lastIndexOf('Eucalyptus');
                if(indexFull < 3) return [...flowerQueue, 'Eucalyptus'];
                return flowerQueue;
              })}
           }>+</button>
           <button id = "button2" onClick={
            () =>{dispatch({type: 'decrement', flowerChoice:'Eucalyptus'})
            setFlowerQueue(flowerQueue => {
                const index = flowerQueue.lastIndexOf('Eucalyptus');
                if (index === -1) return flowerQueue
                return flowerQueue.filter((_, i) => i !== index)
              });
           }}>-</button>
    </div>
    
        </div>
         <div className="flowerItem"> 
        <img id = "imageShow" src="Delphinium/pic.png" alt="DelphiniumPhoto"></img>
        <div className = "NamePrice">
        <span>  Delphinium {flowerState.Delphinium} </span> 
        <span id = "Price">$16</span>
        </div>

       <div className = "infoWrapperBox" style={{ position: 'relative' }}>
        <p id = "More"
        onMouseEnter={() => setHover({...hover, Delphinium:true})}
        onMouseLeave={() => setHover({...hover, Delphinium:false})}
        onClick={() => setInfo({...info, Delphinium:!info.Delphinium})}
        style ={{color : hover.Delphinium? 'rosybrown':'black', textDecoration: hover && 'underline'}}>More</p>
        {info.Delphinium? <p id = "Clarification">Tall spires of vivid blooms symbolize boldness, joy, and inspiring graceful celebrations.</p>:null}
      </div>

        <div className="buttonGroup">
        <button id = "button1" onClick={
            () =>{dispatch({type: 'increment', flowerChoice:'Delphinium'})
            setFlowerQueue(flowerQueue => {
                const indexFull = flowerQueue.lastIndexOf('Delphinium');
                if(indexFull < 3) return [...flowerQueue, 'Delphinium']
                return flowerQueue;
              })}
           }>+</button>
           <button id = "button2" onClick={
            () =>{dispatch({type: 'decrement', flowerChoice:'Delphinium'})
            setFlowerQueue(flowerQueue => {
                const index = flowerQueue.lastIndexOf('Delphinium');
                if (index === -1) return flowerQueue 
                return flowerQueue.filter((_, i) => i !== index)
              })
           }}>-</button>
        </div>   
    
        </div> 


        <div className="flowerItem">
        <img id = "imageShow" src="ItalianRuscus/pic.png"  alt="ItalianRuscusPhoto"></img>
        <div className = "NamePrice">
        <span>  Italian Ruscus {flowerState.ItalianRuscus} </span> 
        <span id = "Price">$15</span>
        </div>

        <div className = "infoWrapperBox" style={{ position: 'relative' }}>
        <p id = "More"
        onMouseEnter={() => setHover({...hover, ItalianRuscus:true})}
        onMouseLeave={() => setHover({...hover, ItalianRuscus:false})}
        onClick={() => setInfo({...info, ItalianRuscus:!info.ItalianRuscus})}
        style ={{color : hover.ItalianRuscus? 'rosybrown':'black', textDecoration: hover && 'underline'}}>More</p>
        {info.ItalianRuscus? <p id = "Clarification">Vibrant tubular blooms attract hummingbirds, adding wild charm and enduring beauty to gardens.</p>:null}
        </div>

        <div className="buttonGroup">
        <button id = "button1" onClick={
            () =>{dispatch({type: 'increment', flowerChoice:'ItalianRuscus'})
            setFlowerQueue(flowerQueue => {
                const indexFull = flowerQueue.lastIndexOf('ItalianRuscus');
                if(indexFull < 3) return [...flowerQueue, 'ItalianRuscus'];
                return flowerQueue;})}
           }>+</button>
           <button id = "button2" onClick={
            () =>{dispatch({type: 'decrement', flowerChoice:'ItalianRuscus'})
            setFlowerQueue(flowerQueue => {
                const index = flowerQueue.lastIndexOf('ItalianRuscus');
                if (index === -1) return flowerQueue 
                return flowerQueue.filter((_, i) => i !== index)
              })
           }}>-</button>

        </div>
    
    </div>


         <div className="flowerItem"> 
         <img id = "imageShow" src="Tulip/pic.png" alt="TulipPhoto"></img>
         <div className = "NamePrice">
         <span>  Tulip {flowerState.Tulip} </span> 
         <span id = "Price">$16</span>
         </div>
      <div className = "infoWrapperBox" style={{ position: 'relative' }}>
        <p id = "More"
        onMouseEnter={() => setHover({...hover, Tulip:true})}
        onMouseLeave={() => setHover({...hover, Tulip:false})}
        onClick={() => setInfo({...info, Tulip:!info.Tulip})}
        style ={{color : hover.Tulip? 'rosybrown':'black', textDecoration: hover && 'underline'}}>More</p>
        {info.Tulip? <p id = "Clarification">Classic springtime bloom radiates charm, color, and timeless expressions of love and happiness.</p>:null}
      </div>

         <div className="buttonGroup">
      <button id = "button1" onClick={
            () =>{dispatch({type: 'increment', flowerChoice:'Tulip'})
            setFlowerQueue(flowerQueue => {
                const indexFull = flowerQueue.lastIndexOf('Tulip');
                if(indexFull < 3) return [...flowerQueue, 'Tulip']
                return flowerQueue
              })}
           }>+</button>
           <button id = "button2" onClick={
            () =>{dispatch({type: 'decrement', flowerChoice:'Tulip'})
            setFlowerQueue(flowerQueue => {
                const index = flowerQueue.lastIndexOf('Tulip')
                if (index === -1) return flowerQueue 
                return flowerQueue.filter((_, i) => i !== index)
              })
           }}>-</button>
    </div>
    
        </div> 
        <div className="flowerItem">
        <img id = "imageShow" src="Lily/pic.png" alt="LilyPhoto"></img>
        <div className = "NamePrice">
        <span>  Lily {flowerState.Lily} </span>
        <span id = "Price">$17</span> 
        </div>

        <div className = "infoWrapperBox" style={{ position: 'relative' }}>
        <p id = "More"
        onMouseEnter={() => setHover({...hover, Lily:true})}
        onMouseLeave={() => setHover({...hover, Lily:false})}
        onClick={() => setInfo({...info, Lily:!info.Lily})}
        style ={{color : hover.Lily? 'rosybrown':'black', textDecoration: hover && 'underline'}}>More</p>
        {info.Lily? <p id = "Clarification">Elegant petals convey purity, devotion, and renewal, perfect for heartfelt, timeless floral displays.</p>:null}
        </div>

        <div className="buttonGroup">
        <button id = "button1" onClick={
            () =>{dispatch({type: 'increment', flowerChoice:'Lily'})
            setFlowerQueue(flowerQueue => {
                const indexFull = flowerQueue.lastIndexOf('Lily')
                if(indexFull < 3) return [...flowerQueue, 'Lily']
                return flowerQueue
              })}
           }>+</button>
           <button  id = "button2" onClick={
            () =>{dispatch({type: 'decrement', flowerChoice:'Lily'})
            setFlowerQueue(flowerQueue => {
                const index = flowerQueue.lastIndexOf('Lily')
                if (index === -1) return flowerQueue
                return flowerQueue.filter((_, i) => i !== index);
              })
           }}>-</button>
    </div>
    
     </div> 
    <div className="flowerItem"> 
    <img id = "imageShow" src="Cymbidium/pic.png" alt="CymbidiumPhoto"></img>
    <div className = "NamePrice">
    <span>  Cymbidium {flowerState.Cymbidium} </span> 
    <span id = "Price">$18</span>
    </div>
        
    <div className = "infoWrapperBox" style={{ position: 'relative' }}>
        <p id = "More"
        onMouseEnter={() => setHover({...hover, Cymbidium:true})}
        onMouseLeave={() => setHover({...hover, Cymbidium:false})}
        onClick={() => setInfo({...info, Cymbidium:!info.Cymbidium})}
        style ={{color : hover.Cymbidium? 'rosybrown':'black', textDecoration: hover && 'underline'}}>More</p>
        {info.Cymbidium? <p id = "Clarification">Exotic orchids bring sophistication, resilience, and delicate beauty to modern floral designs.</p>:null}
        </div>

    <div className="buttonGroup">
    
    <button id = "button1" onClick={
            () =>{dispatch({type: 'increment', flowerChoice:'Cymbidium'})
            setFlowerQueue(flowerQueue => {
                const indexFull = flowerQueue.lastIndexOf('Cymbidium')
                if(indexFull < 3) return [...flowerQueue, 'Cymbidium']
                return flowerQueue;
              })}
           }>+</button>
           <button id = "button2" onClick={
            () =>{dispatch({type: 'decrement', flowerChoice:'Cymbidium'})
            setFlowerQueue(flowerQueue => {
                const index = flowerQueue.lastIndexOf('Cymbidium');
                if (index === -1) return flowerQueue
                return flowerQueue.filter((_, i) => i !== index)
              })
           }}>-</button>
           </div>
    
        </div> 
       <div className="flowerItem"> 
       <img id = "imageShow" src="Chrysanthemum/pic.png" alt="ChrysanthemumPhoto"></img>
       <div className = "NamePrice">
       <span> Chrysanthemum {flowerState.Chrysanthemum} </span>
       <span id = "Price">$18</span>
       
       </div>

       <div className = "infoWrapperBox" style={{ position: 'relative' }}>
        <p id = "More"
        onMouseEnter={() => setHover({...hover, Chrysanthemum:true})}
        onMouseLeave={() => setHover({...hover, Chrysanthemum:false})}
        onClick={() => setInfo({...info, Chrysanthemum:!info.Chrysanthemum})}
        style ={{color : hover.Chrysanthemum? 'rosybrown':'black', textDecoration: hover && 'underline'}}>More</p>
        {info.Chrysanthemum? <p id = "Clarification">Cheerful blooms symbolize longevity, friendship, and optimism, brightening any occasion with joy.</p>:null} 
        
        </div> 
       
       <div className="buttonGroup">
       <button id = "button1" onClick={
            () =>{dispatch({type: 'increment', flowerChoice:'Chrysanthemum'})
            setFlowerQueue(flowerQueue => {
                const indexFull = flowerQueue.lastIndexOf('Chrysanthemum')
                if(indexFull < 3) return [...flowerQueue, 'Chrysanthemum']
                return flowerQueue
              })}
           }>+</button> 
           <button id = "button2" onClick={
            () =>{dispatch({type: 'decrement', flowerChoice:'Chrysanthemum'})
            setFlowerQueue(flowerQueue => {
                const index = flowerQueue.lastIndexOf('Chrysanthemum')
                if (index === -1) return flowerQueue
                return flowerQueue.filter((_, i) => i !== index)
              });
           }}>-</button>
           </div>
     
        </div>
        </div>
      <div className = "leftBar">
      <div className = "extraButton">
        <button id = 'generationButton' onClick={randomization}>Random flower combination</button>
        <button id = 'Reset' onClick={handleReset}>Reset</button>
        </div>
        <br></br>
        <div>
        <span style = {{fontSize:"13px", margin:"30px", fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri", justifyContent:"left"}}>Click + on any flower to unlock preview</span>
        </div>
        <br></br>
       <div className = "parentPreview">
           <div className = "PreviewSession">
               <div className = "circle">
                  <span>Preview</span>
              </div>
              <div id = "imgLayer">
              <img  id = "wrapping" src = "WrappingPaper.png" alt="wrapping paper"/>
              <div id = "flowerReveal">{mappingImage}</div>
              <img  id = "wrappingFront" src = "WrappingPaper.png" width = "280" height = "340" alt="wrapping paper"/>
              </div>
           </div>
        
      </div>

      </div>  
        

        </div>
        </div>
        </div>
        

        <br></br> 
        <div className = "Result">
            <div>
          <button id = 'shoppingButton' onClick={() => setCart(!cart)}>Shopping Cart</button>
          <p>{cartReveal}</p>
          <p>Total price: ${addCalories}</p>
         
          {/* <p>The nutrition type of your food combination are: {Object.entries(foodState).filter(([foodName, num]) => num > 0).map(([foodName, num]) => FoodTypeChart[foodName]).join(', ')}</p> */}
        </div>
       {/* <div>{setFoodQueue(foodQueue => [...foodQueue, foodFinder.foodName]).map(((_,i)=><img key={`${foodName}-${i}`} src={FlowerImages[foodName]} alt="chicken" className={`chicken-img chicken-${i}`}/>))}</div> */}

       {/* <div>{foodQueue.map((foodName,i)=><img key={i} src={FlowerImages[foodName]} alt="FlowerName" className={`chicken-img chicken-${i}`}/>)}</div> */}
  
       </div>
       
        <br></br>
        {/* <div className = "extraButton">
        <button id = 'generationButton' onClick={randomization}>Random flower combination</button>
        <button id = 'Reset' onClick={handleReset}>Reset</button>
    
        </div> */}
        {/* <Link to="/products">
        <button>Go to Product List</button>
       </Link> */}
       </div>
        </>
)

};