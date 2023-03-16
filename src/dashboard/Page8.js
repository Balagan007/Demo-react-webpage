import React, { useEffect, useState } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBDataTable } from 'mdbreact';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



function Page8() {
  const [tabledata, setTabledata] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [color, setColor] = useState("");
  const [food, setFood] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {state}=useLocation()
  //const [apply,setApply]=useState({aid:"",aname:"",aage:"",acolor:"",afood:""})


  const[aid,setAid]=useState("");
  const  [aname, setAname] = useState("");
  const [aage, setAage] = useState("");
  const [acolor, setAcolor] = useState("");
  const [afood, setAfood] = useState("");
  const [open, setOpen] = useState(false);
  const popClose = () => setOpen(false);
  const popShow = () => setOpen(true);
  const navigate = useNavigate();
  

 
  useEffect(() => {
    //sessionStorage.setItem("uname",JSON.stringify(state));
    const bala = JSON.parse(sessionStorage.getItem("persons"));
    //console.log(bala);
    setTabledata(bala);
  }, [])
  //  useEffect(() => {
  //    }, [sessionStorage.getItem("uname")])
  const dat = {
    columns: [
      {
        label: "Id",
        field: "id",
        width: "200"
      },
      {
        label: "Name",
        field: "name"

      },
      {
        label: "Age",
        field: "age"

      },
      {
        label: "Color",
        field: "color"
      },
      {
        label: "Food",
        field: "food"
      }
      ,
      {
        label: "Action",
        field: "action",
        width: "60"
      }
    ],
    rows: tabledata.map((x) => {
      return {
        id: x.id,
        name: x.name,
        age: x.age,
        color: x.color,
        food: x.food,
        action:
          (
            <>
              <div classsName="actButton">

                <button className="btn" onClick={(e) => deleteRow(x)}>Delete</button>


                <button className="btn" onClick={(e) => updateRow(x)}>Edit</button>

                

              </div>
            </>
          )


      }
    })
  }
  const updateRow = (row) => {
    setId(row.id)
    setName(row.name)
    setAge(row.age)
    setColor(row.color)
    setFood(row.food)
    handleShow();
    
  }
 
  

  const handleSubmit = () => {
   const data= tabledata.map((row) => {
      if (row.id == id) {
        //console.log(id);
        return {
          id: id,
          name: name,
          age: age,
          color: color,
          food: food
        }
      }
      else {
        return row
      }
    }
    ) 
    setTabledata(data);
    sessionStorage.setItem("person",JSON.stringify(data));
    handleClose();
  }

function deleteRow(value) {
  var index = tabledata.findIndex(({ id }) => id == value.id);
  //var ind = tabledata.find(({ id }) => id ==tabledata.index+1);
if (index !== -1) {
      //console.log(ind);
      tabledata.splice(index, 1);
      sessionStorage.setItem("persons", JSON.stringify(tabledata));
      //console.log(tabledata);
      navigate("/Dashboard");
    }
  }

  const addRow=()=>{
  popShow();
  }

 

  const popSubmit=()=>{
  const object={}
  object.id=aid;
  object.name=aname;
  object.age=aage;
  object.color=acolor;
  object.food=afood;

 tabledata.push(object);

 sessionStorage.setItem("persons",JSON.stringify(tabledata));
 const result=JSON.parse(sessionStorage.getItem("persons"));
 setTabledata(result);
    popClose();
  }

  const listData=()=>{
navigate("/List");
  }

 

return (
    <>
      <div classsName="actButton">
       <button className='btn' onClick={(e)=>addRow()} style={{float:"right"}}>Add</button>
     {/* </div> */}
     
     {/* <div classsName="actButton"> */}
       <button className='btn' onClick={(e)=>listData()} style={{float:"right"}}>List</button>
     </div>

     

     <Modal
        show={open}
        onHide={popClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>

            <label style={{ marginLeft: "60px" }}>Id:</label>
            <input type="text" name="id" value={aid}  style={{ paddingRight: "30px", marginLeft: "58px" }}
               onChange={(e) => setAid(e.target.value)} autoFocus autoComplete="off" />
              

            <label style={{ paddingRight: "30px", marginLeft: "60px" }}>Name:</label>
            <input type="text" name="uname" value={aname} style={{ paddingRight: "30px" }}
               onChange={(e) => setAname(e.target.value)} autoFocus autoComplete="off" />
              
            <label style={{ paddingRight: "30px", marginLeft: "60px" }}>Age:</label>
            <input type="text" name="age" value={aage} style={{ paddingRight: "30px", marginLeft: "16px" }}
              onChange={(e) => setAage(e.target.value)} autoComplete="off" />

            <label style={{ paddingRight: "30px", marginLeft: "60px" }}>Color:</label>
            <input type="text" name="color" value={acolor} style={{ paddingRight: "30px", marginLeft: "8px" }}
              onChange={(e) => setAcolor(e.target.value)} autoFocus autoComplete="off" />

            <label style={{ paddingRight: "30px", marginLeft: "60px" }}>Food:</label>
            <input type="text" name="food" value={afood} style={{ paddingRight: "30px", marginLeft: "10px" }}
              onChange={(e) => setAfood(e.target.value)} autoFocus autoComplete="off" />


          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={popClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => popSubmit()}>Add</Button>
        </Modal.Footer>
      </Modal>
      <MDBDataTable striped bordered hovered data={dat} />

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>

            <label style={{ marginLeft: "60px" }}>Id:</label>
            <input type="text" name="id" value={id} readOnly style={{ paddingRight: "30px", marginLeft: "58px" }}
              onChange={(e) => setId(e.target.value)} autoFocus autoComplete="off" />

            <label style={{ paddingRight: "30px", marginLeft: "60px" }}>Name:</label>
            <input type="text" name="uname" value={name} style={{ paddingRight: "30px" }}
              onChange={(e) => setName(e.target.value)} autoFocus autoComplete="off" />

            <label style={{ paddingRight: "30px", marginLeft: "60px" }}>Age:</label>
            <input type="text" name="age" value={age} style={{ paddingRight: "30px", marginLeft: "16px" }}
              onChange={(e) => setAge(e.target.value)} autoComplete="off" />

            <label style={{ paddingRight: "30px", marginLeft: "60px" }}>Color:</label>
            <input type="text" name="color" value={color} style={{ paddingRight: "30px", marginLeft: "8px" }}
              onChange={(e) => setColor(e.target.value)} autoFocus autoComplete="off" />

            <label style={{ paddingRight: "30px", marginLeft: "60px" }}>Food:</label>
            <input type="text" name="food" value={food} style={{ paddingRight: "30px", marginLeft: "10px" }}
              onChange={(e) => setFood(e.target.value)} autoFocus autoComplete="off" />


          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => handleSubmit()}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Page8