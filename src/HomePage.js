import { Link } from "react-router-dom";
import { useState, useEffect, useReducer} from 'react';
import reducer from './OrderButton'
import randomFood from './FoodSelector'
import './styles.css'

export default function HomePage() {

      const [food, setfood] = useState([]);
      const [message, setMessage] =useState();
      const [Calories, setCalories] = useState('0');
      // const [ifToxic, setIfToxic] = useState(null);
    //   const [nutrientType, setnutrientType] = useState();
      const [cart, setCart] = useState(null);
      const [hover, setHover] = useState({Rose:null, Pentstemon: null, Eucalyptus:null, Delphinium: null, Tulip: null, Lily: null, Cymbidium:null, Chrysanthemum: null});
      const [info, setInfo] = useState({Rose:null, Pentstemon: null, Eucalyptus:null, Delphinium: null, Tulip: null, Lily: null, Cymbidium:null, Chrysanthemum: null});
      const [foodState, dispatch] = useReducer(reducer, { Rose: 0, Pentstemon: 0, Eucalyptus:0, Delphinium: 0, Tulip: 0, Lily: 0, Cymbidium:0, Chrysanthemum: 0});
      const [foodQueue, setFoodQueue] = useState([]);
    
    function handleClick(){
      const selectList = randomFood()
        setfood(selectList)
        setMessage(true)
    }
    
    useEffect(() => {
      clickCalculation()
    //   clickNutrition()
    },[food]);
    
    const clickCalculation = () => {
      let sumCalories = 0
        for(let i=0; i<food.length; i++){
            sumCalories += food[i][2]
        }
        setCalories(sumCalories);
    
    }
    
      const PriceChart = {
        Rose: 15,
        Pentstemon: 15,
        Eucalyptus: 15,
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
        Delphinium: "Delphinium.png",
        Tulip: "Tulip.png",
        Lily: "Lily.png",
        Cymbidium: "Cymbidium.png",
        Chrysanthemum: "Chrysanthemum.png",
      }

    
    const addCalories = Object.entries(foodState)
       .filter(([foodName, num]) => num > 0)
       .map(([foodName, num]) => PriceChart[foodName] * num)
       .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
      let warningMessage = null;
      if (addCalories > 500){
        warningMessage = "⚠️ Too many calories!";
      }
    
      let selectList = []
    const randomization = () => {
        for(let i=0; i<4; i++){
        const key = Object.keys(PriceChart)
        const randomgenerator = key[Math.floor(Math.random() * key.length)];
       selectList.push(randomgenerator)
        }
       selectList.forEach(key => {
        dispatch({type: 'increment', foodChoice: key});
        setFoodQueue(foodQueue => [...foodQueue, key])
     });
    }
       
    const mappingImage = foodQueue
    .filter((foodName,i) => i < 4)
    .map((foodName,i)=><img key={i} src={FlowerImages[foodName]} alt="FlowerName" className={`chicken-img chicken-${i}`}/>)
   
      return(
        <>
        <div className = "top">
        <span id = "title">Bouquet Customization</span>
        <span id = "subtitle">Select from a wide range of blooms, add your personal touch, and enjoy same-day delivery of your unique bouquet.</span>
        </div>
        <div className = "Order">
        <div className = "container">
        <div className = "foodGrid">
        <div className = "foodWrapper">
        <div className="foodItem">
        <img id = "imageShow" src="Rose/pic.jpg" alt="ChickenPhoto"></img>
        <div className = "NamePrice">
        <span>  Rose {foodState.Rose} </span>
        <span id = "Price">$15</span>
        </div> 
        <div className="buttonGroup">
        <button id = "button1" onClick={
            () =>{dispatch({type: 'increment', foodChoice:'Rose'})
            setFoodQueue(foodQueue => {
                const indexFull = foodQueue.lastIndexOf('Rose');
                if(indexFull < 3) return [...foodQueue, 'Rose'];
                return foodQueue;})}
           }>+</button>
           <button id = "button2" onClick={
            () =>{dispatch({type: 'decrement', foodChoice:'Rose'})
            setFoodQueue(foodQueue => {
                const index = foodQueue.lastIndexOf('Rose');
                if (index === -1) return foodQueue; 
                return foodQueue.filter((_, i) => i !== index);
              });
            }}>-</button>
        </div>
        <div className = "infoWrapperBox" style={{ position: 'relative' }}>
        <p id = "More"
        onMouseEnter={() => setHover({...hover, Rose:true})}
        onMouseLeave={() => setHover({...hover, Rose:false})}
        onClick={() => setInfo({...info, Rose:!info.Rose})}
        style ={{color : hover.Rose? 'rosybrown':'black', textDecoration: hover && 'underline'}}>More</p>
        {info.Rose? <p id = "Clarification">The rose, timeless and fragrant, symbolizes love, beauty, and elegance across cultures</p>:null}
        </div>
        </div>
    
        <div className="foodItem">
        <img id = "imageShow" src="Pentstemon/pic.png"  alt="RicePhoto"></img>
        <div className = "NamePrice">
        <span>  Pentstemon {foodState.Pentstemon} </span> 
        <span id = "Price">$15</span>
        </div>
        <div className="buttonGroup">
        <button id = "button1" onClick={
            () =>{dispatch({type: 'increment', foodChoice:'Pentstemon'})
            setFoodQueue(foodQueue => {
                const indexFull = foodQueue.lastIndexOf('Pentstemon');
                if(indexFull < 3) return [...foodQueue, 'Pentstemon'];
                return foodQueue;})}
           }>+</button>
           <button id = "button2" onClick={
            () =>{dispatch({type: 'decrement', foodChoice:'Pentstemon'})
            setFoodQueue(foodQueue => {
                const index = foodQueue.lastIndexOf('Pentstemon');
                if (index === -1) return foodQueue; 
                return foodQueue.filter((_, i) => i !== index);
              });
           }}>-</button>
        </div>

    <div className = "infoWrapperBox" style={{ position: 'relative' }}>
        <p id = "More"
        onMouseEnter={() => setHover({...hover, Pentstemon:true})}
        onMouseLeave={() => setHover({...hover, Pentstemon:false})}
        onClick={() => setInfo({...info, Pentstemon:!info.Pentstemon})}
        style ={{color : hover.Pentstemon? 'rosybrown':'black', textDecoration: hover && 'underline'}}>More</p>
        {info.Pentstemon? <p id = "Clarification">Vibrant tubular blooms attract hummingbirds, adding wild charm and enduring beauty to gardens.</p>:null}
        </div>
    
    </div>
    <div className="foodItem">
    <img id = "imageShow" src="Eucalyptus/pic.jpg" alt="AvacadoPhoto"></img>
    <div className = "NamePrice">
    <span>  Eucalyptus {foodState.Eucalyptus} </span> 
    <span id = "Price">$15</span>
    </div>
    <div className="buttonGroup">
    <button id = "button1" onClick={
            () =>{dispatch({type: 'increment', foodChoice:'Eucalyptus'})
            setFoodQueue(foodQueue => {
                const indexFull = foodQueue.lastIndexOf('Eucalyptus');
                if(indexFull < 3) return [...foodQueue, 'Eucalyptus'];
                return foodQueue;})}
           }>+</button>
           <button id = "button2" onClick={
            () =>{dispatch({type: 'decrement', foodChoice:'Eucalyptus'})
            setFoodQueue(foodQueue => {
                const index = foodQueue.lastIndexOf('Eucalyptus');
                if (index === -1) return foodQueue; 
                return foodQueue.filter((_, i) => i !== index);
              });
           }}>-</button>
    </div>

    <div className = "infoWrapperBox" style={{ position: 'relative' }}>
        <p id = "More"
        onMouseEnter={() => setHover({...hover, Eucalyptus:true})}
        onMouseLeave={() => setHover({...hover, Eucalyptus:false})}
        onClick={() => setInfo({...info, Eucalyptus:!info.Eucalyptus})}
        style ={{color : hover.Eucalyptus? 'rosybrown':'black', textDecoration: hover && 'underline'}}>More</p>
        {info.Eucalyptus? <p id = "Clarification">Silvery aromatic leaves embody calm, freshness, and natural elegance in floral arrangements. </p>:null}
        </div>
    
        </div>
         <div className="foodItem"> 
        <img id = "imageShow" src="Delphinium/pic.png" alt="BroccoliPhoto"></img>
        <div className = "NamePrice">
        <span>  Delphinium {foodState.Delphinium} </span> 
        <span id = "Price">$16</span>
        </div>
        <div className="buttonGroup">
        <button id = "button1" onClick={
            () =>{dispatch({type: 'increment', foodChoice:'Delphinium'})
            setFoodQueue(foodQueue => {
                const indexFull = foodQueue.lastIndexOf('Delphinium');
                if(indexFull < 3) return [...foodQueue, 'Delphinium'];
                return foodQueue;})}
           }>+</button>
           <button id = "button2" onClick={
            () =>{dispatch({type: 'decrement', foodChoice:'Delphinium'})
            setFoodQueue(foodQueue => {
                const index = foodQueue.lastIndexOf('Delphinium');
                if (index === -1) return foodQueue; 
                return foodQueue.filter((_, i) => i !== index);
              });
           }}>-</button>
        </div>   
    
    <div className = "infoWrapperBox" style={{ position: 'relative' }}>
        <p id = "More"
        onMouseEnter={() => setHover({...hover, Delphinium:true})}
        onMouseLeave={() => setHover({...hover, Delphinium:false})}
        onClick={() => setInfo({...info, Delphinium:!info.Delphinium})}
        style ={{color : hover.Delphinium? 'rosybrown':'black', textDecoration: hover && 'underline'}}>More</p>
        {info.Delphinium? <p id = "Clarification">Tall spires of vivid blooms symbolize boldness, joy, and inspiring graceful celebrations.</p>:null}
        </div>
    
        </div> 
         <div className="foodItem"> 
         <img id = "imageShow" src="Tulip/pic.jpg" alt="AlmondsPhoto"></img>
         <div className = "NamePrice">
         <span>  Tulip {foodState.Tulip} </span> 
         <span id = "Price">$16</span>
         </div>
         <div className="buttonGroup">
      <button id = "button1" onClick={
            () =>{dispatch({type: 'increment', foodChoice:'Tulip'})
            setFoodQueue(foodQueue => {
                const indexFull = foodQueue.lastIndexOf('Tulip');
                if(indexFull < 3) return [...foodQueue, 'Tulip'];
                return foodQueue;})}
           }>+</button>
           <button id = "button2" onClick={
            () =>{dispatch({type: 'decrement', foodChoice:'Tulip'})
            setFoodQueue(foodQueue => {
                const index = foodQueue.lastIndexOf('Tulip');
                if (index === -1) return foodQueue; 
                return foodQueue.filter((_, i) => i !== index);
              });
           }}>-</button>
    </div>

    <div className = "infoWrapperBox" style={{ position: 'relative' }}>
        <p id = "More"
        onMouseEnter={() => setHover({...hover, Tulip:true})}
        onMouseLeave={() => setHover({...hover, Tulip:false})}
        onClick={() => setInfo({...info, Tulip:!info.Tulip})}
        style ={{color : hover.Tulip? 'rosybrown':'black', textDecoration: hover && 'underline'}}>More</p>
        {info.Tulip? <p id = "Clarification">Classic springtime bloom radiates charm, color, and timeless expressions of love and happiness.</p>:null}
        </div>
    
        </div> 
        <div className="foodItem">
        <img id = "imageShow" src="Lily/pic.png" alt="TofuPhoto"></img>
        <div className = "NamePrice">
        <span>  Lily {foodState.Lily} </span>
        <span id = "Price">$17</span> 
        </div>
        <div className="buttonGroup">
        <button id = "button1" onClick={
            () =>{dispatch({type: 'increment', foodChoice:'Lily'})
            setFoodQueue(foodQueue => {
                const indexFull = foodQueue.lastIndexOf('Lily');
                if(indexFull < 3) return [...foodQueue, 'Lily'];
                return foodQueue;})}
           }>+</button>
           <button  id = "button2" onClick={
            () =>{dispatch({type: 'decrement', foodChoice:'Lily'})
            setFoodQueue(foodQueue => {
                const index = foodQueue.lastIndexOf('Lily');
                if (index === -1) return foodQueue; 
                return foodQueue.filter((_, i) => i !== index);
              });
           }}>-</button>
    </div>

    <div className = "infoWrapperBox" style={{ position: 'relative' }}>
        <p id = "More"
        onMouseEnter={() => setHover({...hover, Lily:true})}
        onMouseLeave={() => setHover({...hover, Lily:false})}
        onClick={() => setInfo({...info, Lily:!info.Lily})}
        style ={{color : hover.Lily? 'rosybrown':'black', textDecoration: hover && 'underline'}}>More</p>
        {info.Lily? <p id = "Clarification">Elegant petals convey purity, devotion, and renewal, perfect for heartfelt, timeless floral displays.</p>:null}
        </div>
    
     </div> 
    <div className="foodItem"> 
    <img id = "imageShow" src="Cymbidium/pic.png" alt="PotatoPhoto"></img>
    <div className = "NamePrice">
    <span>  Cymbidium {foodState.Cymbidium} </span> 
    <span id = "Price">$18</span>
    </div>
    <div className="buttonGroup">
    
    <button id = "button1" onClick={
            () =>{dispatch({type: 'increment', foodChoice:'Cymbidium'})
            setFoodQueue(foodQueue => {
                const indexFull = foodQueue.lastIndexOf('Cymbidium');
                if(indexFull < 3) return [...foodQueue, 'Cymbidium'];
                return foodQueue;})}
           }>+</button>
           <button id = "button2" onClick={
            () =>{dispatch({type: 'decrement', foodChoice:'Cymbidium'})
            setFoodQueue(foodQueue => {
                const index = foodQueue.lastIndexOf('Cymbidium');
                if (index === -1) return foodQueue; 
                return foodQueue.filter((_, i) => i !== index);
              });
           }}>-</button>
           </div>
    
    <div className = "infoWrapperBox" style={{ position: 'relative' }}>
        <p id = "More"
        onMouseEnter={() => setHover({...hover, Cymbidium:true})}
        onMouseLeave={() => setHover({...hover, Cymbidium:false})}
        onClick={() => setInfo({...info, Cymbidium:!info.Cymbidium})}
        style ={{color : hover.Cymbidium? 'rosybrown':'black', textDecoration: hover && 'underline'}}>More</p>
        {info.Cymbidium? <p id = "Clarification">Exotic orchids bring sophistication, resilience, and delicate beauty to modern floral designs.</p>:null}
        </div>
    
        </div> 
       <div className="foodItem"> 
       <img id = "imageShow" src="Chrysanthemum/pic.png" alt="SalmonPhoto"></img>
       <div className = "NamePrice">
       <span> Chrysanthemum {foodState.Chrysanthemum} </span>
       <span id = "Price">$18</span>
       
       </div>
       
       <div className="buttonGroup">
       <button id = "button1" onClick={
            () =>{dispatch({type: 'increment', foodChoice:'Chrysanthemum'})
            setFoodQueue(foodQueue => {
                const indexFull = foodQueue.lastIndexOf('Chrysanthemum');
                if(indexFull < 3) return [...foodQueue, 'Chrysanthemum'];
                return foodQueue;})}
           }>+</button> 
           <button id = "button2" onClick={
            () =>{dispatch({type: 'decrement', foodChoice:'Chrysanthemum'})
            setFoodQueue(foodQueue => {
                const index = foodQueue.lastIndexOf('Chrysanthemum');
                if (index === -1) return foodQueue; 
                return foodQueue.filter((_, i) => i !== index);
              });
           }}>-</button>
           </div>
     
    <div className = "infoWrapperBox" style={{ position: 'relative' }}>
        <p id = "More"
        onMouseEnter={() => setHover({...hover, Chrysanthemum:true})}
        onMouseLeave={() => setHover({...hover, Chrysanthemum:false})}
        onClick={() => setInfo({...info, Chrysanthemum:!info.Chrysanthemum})}
        style ={{color : hover.Chrysanthemum? 'rosybrown':'black', textDecoration: hover && 'underline'}}>More</p>
        {info.Chrysanthemum? <p id = "Clarification">Cheerful blooms symbolize longevity, friendship, and optimism, brightening any occasion with joy.</p>:null} 
        
        </div> 
        </div>
        </div>
        <div className = "parentPreview">
        <div className = "PreviewSession">
        <div className = "circle">
        <span>Preview</span>
        <span style = {{fontSize:"13px", margin:"30px"}}>Click + on any flower to unlock preview</span>
        </div>
        <img  id = "wrapping" src = "WrappingPaper.png" alt="wrapping paper"/>
        <div>{mappingImage}</div>
        <img  id = "wrappingFront" src = "WrappingPaper.png" width = "280" height = "340" alt="wrapping paper"/>
        </div>
        
        </div>
        </div>
        </div>
        </div>
        

        <br></br> 
        <div className = "Result">
            <div>
          <button id = 'shoppingButton' onClick={() => setCart(!cart)}>Shopping Cart</button>
          <p>{cart ? Object.entries(foodState)
          .filter(([foodName, amount]) => amount > 0)
          .map(([foodName, amount]) => <p key={foodName}>{foodName}:{amount}</p>) : null}</p>
          <p>Total price: ${addCalories}</p>
          <footer>{warningMessage}</footer>
          {/* <p>The nutrition type of your food combination are: {Object.entries(foodState).filter(([foodName, num]) => num > 0).map(([foodName, num]) => FoodTypeChart[foodName]).join(', ')}</p> */}
        </div>
       {/* <div>{setFoodQueue(foodQueue => [...foodQueue, foodFinder.foodName]).map(((_,i)=><img key={`${foodName}-${i}`} src={FlowerImages[foodName]} alt="chicken" className={`chicken-img chicken-${i}`}/>))}</div> */}

       {/* <div>{foodQueue.map((foodName,i)=><img key={i} src={FlowerImages[foodName]} alt="FlowerName" className={`chicken-img chicken-${i}`}/>)}</div> */}
       </div>
       
        <br></br>
        <div className = "Generation">
        <button id = 'generationButton' onClick={randomization}
        >Random flower combination</button>
        <p>
          {message ? 'Generated successfuly! Your food combination are:' : null}
        </p>
        <ul>
        
            {food.map(item => (
              <li>{item[0]}</li>
            ))}
        
        </ul>
    
        </div>
        <Link to="/products">
        <button>Go to Product List</button>
       </Link>

        </>
)

};