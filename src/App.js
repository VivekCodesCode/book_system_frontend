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
  let titles = ["Anderson Palace,Indore", "Shreemaya , Indore", "Great-Palace , Pune", "Sky High , Hyderabad", "Ocean Deep , Luckhnow", "Atomic-Habits", "Great Palace , Banglore", "Gatsby , Dhar",
    "Mountain Palace , NewYork", "Bukingam Palace , Canada", "Mountress Palace , Dubai", "Diamond Mention , Goa"
  ];
  let images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg8D7Wa34qhrr1sHSReZFXa8mYV-nCvpsfPg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFlZo727G2zM_cq9fG5PcVHs4tyclyog_IaA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpnZSawUK9d0O_UeV67nrwLkMSSTP9FQuIGw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDRQ8AzI7-P4Wn2f4oXd77zaVyAmy4g3fk8w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlc78qZ9ffnkEDqrf41cb4yDfJkFCEY8n25g&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuKY-hd-Oq4Q4sNkTiJvpzC-0mR71jbH0SHw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs8YBSvf6RRDNLAp_ghWY-IHMMdb88dCQj-Q&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmyn22UqwD9JG96scuEuxsrpyv3vmtO4xLEQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRwqXJhgat9Lyk1iyt70ZG3cc4_aJckezopQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX4bfTE2fsD5bkisIWOYweDZqzfnMsUM-X6w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmFGP7isigsYXY4sHF_YWj024VDSYdT8ObMA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq-khTatH5anushmDZjU40xr6dKUAi2PvXbQ&s"
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
