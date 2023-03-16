import React from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import IconButton from '@mui/material/IconButton';
// import { makeStyles } from '@material-ui/core/styles';

// import Button from '@material-ui/core/Button';
import tank from "../Asset/Image/tank.jpg";
import pump from "../Asset/Image/pump.jpg";
import tap from "../Asset/Image/tap.jpeg";
import sink from "../Asset/Image/sink.jpg";
import light from "../Asset/Image/light.jpg";
import swich from "../Asset/Image/swich.jpg";
import fan from "../Asset/Image/fan.jpg";
import lock from "../Asset/Image/lock.jpg";
import cctv from "../Asset/Image/cctv.jpg";
import heater from "../Asset/Image/heater.jpg";
import FavoriteIcon from '@mui/icons-material/Favorite';




function Cart() {


    const [addcart, setAddcart] = useState([]);
    // const[price,setPrice]=useState("");
    const [data, setData] = useState([]);
    const [vish, setVish] = useState([]);
    const [heart, setHeart] = useState([]);
    const navigate = useNavigate();
    // let cartValues=[];
    const CartList = [
        {
            img: tank,
            title: 'Water Tank',
            description:
                'Keeps water cool,Rustproof, leak-proof,Insect proof lid,Safe for drink water,Brand-Kaveri,Capacity-1000L,Material-Plastic.',
            Qty: 1,
            price: 1300,
            cart: "unclicked",
            like: "dislike",
        },
        {
            img: pump,
            title: 'V Guard Pump 1HP',
            description:
                'The V Guard Submersible Pump is a vertical stainless steel pump with a 1 HP motor that is capable of delivering 100-20 lpm of water. It has a power rating of 0.75 kW and a bore size of 100 mm. ',
            Qty: 1,
            price: 10000,
            cart: "unclicked",
            like: "dislike",
        },
        {
            img: tap,
            title: 'Tap Faucet (Chrome Finish)',
            description:
                'Mirror Look Technology, is highly reflective for a mirror-like look and keep it a life long bright Make this cartridge smoothness technology, Reliable Ceramic Cartridge, survive 500,000 times open & close test. Sophisticated ceramic engineering provides both convenience and control precision.',
            Qty: 1,
            price: 300,
            cart: "unclicked",
            like: "dislike",
        },
        {
            img: sink,
            title: 'KITCHEN SINK(MATTE FINISH)',
            description:
                'PREMIUM QUALITY: Constructed by heavy duty stainless steel, easy to clean, resilient and long-lasting, matches most kitchen appliances, bar and used in laundry.',
            Qty: 1,
            price: 3000,
            cart: "unclicked",
            like: "dislike",
        },
        {
            img: light,
            title: 'Smart WiFi LED Light',
            description:
                'Be it Diwali decoration, Fancy lighting, Christmas celebration - Arcnics WiFi Enabled Ceiling Lamp fits in every room and every occasion with AI Assistants (Alexa, Google Assistant) support to making it ease to use.',
            Qty: 1,
            price: 2000,
            cart: "unclicked",
            like: "dislike",
        },
        {
            img: swich,
            title: 'Smart Light Switch',
            description:
                'Neutral wire is required, standard wall plate size. No need to understand complex switch, wiring or master vs auxiliary switch configurations; The Kasa app guides you through easy step by step installation. Need 2.4GHz Wi-Fi connection',
            Qty: 1,
            price: 1000,
            cart: "unclicked",
            like: "dislike",
        },
        {
            img: fan,
            title: 'Ceiling Fan (Midnight Black)',
            description:
                'Aerodynamically designed blades for higher air delivery of 240 m3/min at the rate of 280 RPM;Inspired by automobiles, the fan carries; A twin-tone look, adding to the elegance of your home',
            Qty: 1,
            price: 5000,
            cart: "unclicked",
            like: "dislike",
        },
        {
            img: lock,
            title: 'Smart Door Lock',
            description:
                'Wi-Fi Unlocking : You can unlock your Door lock from anywhere and anytime via your LAVNA Mobile App.Mobile APP. - This lock completely operate through mobile application. Add/Del. any user, unlocking records',
            Qty: 1,
            price: 4500,
            cart: "unclicked",
            like: "dislike",
        },
        {
            img: cctv,
            title: 'Security Camera (Black)',
            description:
                'The smart wireless camera works in any kind of weather conditions like rain, dust, snow or sun. The device is designed to be used outdoors and can endure any climate.',
            Qty: 1,
            price: 15000,
            cart: "unclicked",
            like: "dislike",
        },
        {
            img: heater,
            title: 'Bajaj Water Heater',
            description:
                'ABS outer body with SS tank,Copper heating element with efficient longer life,Suitable for 6 bar pressure,Unique Weldfree joint in outer metal body,It come with fire retardent cable and neon indicator for heating',
            Qty: 1,
            price: 11000,
            cart: "unclicked",
            like: "dislike",
        }
    ]


    const [list, setList] = useState(CartList);

    useEffect(() => {
        sessionStorage.setItem("cartlist", JSON.stringify(CartList));
    }, [])


    const handleCart = (value) => {

        const press = list.findIndex((things) =>
            things.title === value.title)

        if (value.cart === "unclicked") {
            list[press].cart = "clicked";

            sessionStorage.setItem("cartlist", JSON.stringify(list));
        }
        else {
            list[press].cart = "unclicked";
            console.log(list)
            sessionStorage.setItem("cartlist", JSON.stringify(list));

        }


        if (addcart.length > 0) {
            let duplicateEntry = false;
            addcart.map((val) => {
                if (val.title === value.title) {
                    duplicateEntry = true;
                }
                return;
            })

            if (!duplicateEntry) {
                setAddcart(addcart => [...addcart, value]);
            }

            else {
                let cartdata = JSON.parse(sessionStorage.getItem('addcart'));

                let sortData = addcart.filter((val) => {
                    return val.title != value.title;
                });
                setAddcart(sortData);
                sessionStorage.setItem('addcart', JSON.stringify(sortData));
            }
        }
        else {
            setAddcart([value]);
        }
    }

    const onHeart = (value) => {

        const press = list.findIndex((things) =>
            things.title === value.title)

        if (value.like === "dislike") {
            list[press].like = "like";

            sessionStorage.setItem("cartlist", JSON.stringify(list));
        }

        else {
            list[press].like = "dislike";
            sessionStorage.setItem("cartlist", JSON.stringify(list));
        }


        if (vish.length > 0) {
            let duplicateEntry = false;
            vish.map((val) => {
                if (val.title === value.title) {
                    duplicateEntry = true;
                }
                return;
            })

            if (!duplicateEntry) {
                setVish(vish => [...vish, value]);
            }

            else {
                let sortData = vish.filter((val) => {
                    return val.title != value.title;
                });
                setVish(sortData);
                sessionStorage.setItem("vish", JSON.stringify(sortData));
            }
        }

        else {
            setVish([value]);
        }
    }


    useEffect(() => {
        sessionStorage.setItem("vish", JSON.stringify(vish));
    }, [vish])

    useEffect(() => {

        sessionStorage.setItem('addcart', JSON.stringify(addcart));
    }, [addcart])




    return (
        <>
            {
                list?.map((value, index) =>

                    <>

                        <div className='row' key={index} style={{ border: "1px solid black", boxShadow: "0 0 5px black", width: "100%", marginTop: "90px", paddingRight: "10px", color: "lightgray" }} >
                            <div className='col-4'>
                                <img src={value.img} style={{ width: "80%" }} />
                            </div>

                            <div className='col-8'>
                                <p className='icard-title' style={{ textAlign: "center", margin: "0", padding: "10px", fontWeight: "bold", fontSize: "25px", color: "brown" }}>{value.title}</p>

                                <p className='description' style={{ textAlign: "center", margin: "0", padding: "10px", fontSize: "20px", color: "Black", fontWeight: "bold" }}>
                                    {value.description}
                                </p>

                                <p className='qty' style={{ textAlign: "center", margin: "0", padding: "10px", fontWeight: "bold", fontSize: "30px", color: "brown" }}>Qty:{value.Qty}</p>

                                <p className='price' style={{ textAlign: "center", margin: "0", padding: "10px", fontWeight: "bold", fontSize: "34px", color: "brown" }}>₹{value.price}</p>
                                <br />

                                {value.like === "like" ? <>

                                    <FavoriteIcon onClick={(e) => onHeart(value)} className="active" />

                                </>
                                    :
                                    <>

                                        <FavoriteIcon onClick={(e) => onHeart(value)} className="heart" />
                                    </>

                                }

                                {value.cart === "clicked" ? <>

                                    <button className='btn' onClick={(e) => handleCart(value)} style={{ color: "white", backgroundColor: "orangered", marginLeft: "150px" }}>Remove To Cart</button>
                                </>
                                    :
                                    <>

                                        <button className='btn' onClick={(e) => handleCart(value)} style={{ color: "white", backgroundColor: "orangered", marginLeft: "150px" }}>Add To Cart</button>
                                    </>
                                }
                            </div>
                        </div>

                    </>

                )};



        </>
    )
}
export default Cart