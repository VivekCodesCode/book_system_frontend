import logo from './logo.svg';
import './App.css';
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { bindActionCreators, useDispatch } from "react-redux";
import { actionCreators } from "./State/index";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbars from './Navbar';
import Footers from './Footer';
import { Audio } from 'react-loader-spinner';
function App() {
  const [button_display, set_display] = useState(Array(20).fill("block"));
  const [cost, new_cost] = useState([290, 386, 274, 900, 590, 586, 462, 586, 90, 299, 500, 480, 896, 900, 604]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const arr=useSelector((state) => state.amount.secondArray);
  console.log("woejifkbiuef"+arr)
  let titles = ["Harry-Potter", "Somewhere Beyond Sea", "The Bog Wife", "Take my mind", "Black Beauty", "Atomic-Habits", "War and Peace", "Amish",
    "Splinters", "American Psyco", "The Alchemist", "Great Gatsby"
  ];
  let images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSubXmB6psMiT1i6pEXr6Ex81xQeImIadNmlA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYRH6xnp7amxuNjw0iWfrqqSFlpb0Fe_VYFA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1z3Z6mvUG7fyiJ3OVzx7-CNOx9o6-AegeRA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzn30-XAgbrycGWXeUDdVGbTb0cIHg1d8X2A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiwzUWplqEA_y3ejj4QXdRswlWwV1mpTNfaA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhcA3JhI42Wb7mvVoBIlGCA92p9Povi_oMnw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROCSbBpPGs_s6KsJ4MmVN-sU8p1M4krchYkA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZzXXjmqJcXjG7pNr2lSJ1l5szvGFxmtUWag&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5DOPTv9dZFILkYSoi2AkxeME3-eGXK1H93A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGh8nYLLj5J3DOWqfY44wkyt2njH8Rwa1u1A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAyRJgU8R3CLpe4tBJn8aJULWoVCs6rkeTJA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKi5lknrw7SIwZ01RQRqyvtXz2bFxrUsGVpA&s"
  ]
  function addtocart_button(params) {
    set_display(
      button_display.map((val, i, arr) => {
        if (params == i) {
          dispatch(actionCreators.depositMoney({
            Title: titles[i],
            Image: images[i],
            Cost: cost[i],
          }));
          // dispatch(actionCreators.total("oewjfn"));
          return "none";

        }
        return val;
      })
    )
  }

  return (
    <>
      <Navbars name={arr[0]}/>
   
      <div className='all_books'>
        {

          titles.map((val, i, arr) => {
            return (
              <div className='one_book'>
                <Card className='one_book' style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={images[i]} height="200px" />
                  <Card.Body>
                    <Card.Title>{val}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <div className='book_infor d-flex'>
                      <Button onClick={() => addtocart_button(i)} style={{ display: button_display[i] }} variant="primary">Add to Cart</Button>
                      <p>Rs {cost[i]}</p>
                    </div>

                  </Card.Body>
                </Card>
              </div>
            )

          })

        }
      </div>
      <Footers />
    </>
  );
}

export default App;
