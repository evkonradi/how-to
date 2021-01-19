import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { QUERY_ME } from "../utils/queries";
import Resource from "../components/Resource";
import { Redirect, useParams, Link } from "react-router-dom";
import { Box } from "@chakra-ui/core";
import { Button } from "@chakra-ui/core";
import Auth from "../utils/auth";
import CardResource from "../components/CardResource";
import { DELETE_RESOURCE } from "../utils/mutations";


const ProfilePage = (props) => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_ME, {
    variables: { username: userParam },
  });
  // const [updateUser] = useMutation(UPDATE_USER);
  const [deleteResource] = useMutation(DELETE_RESOURCE);

  const [userState] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    wallet: "",
    password: "",
  })

  const user = data?.me || data?.user || {};

  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    console.log("Login failed");
    return <Redirect to="/" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return <h1>Sign up | log in <span role="img" aria-label="Sign up | log in">🙂</span></h1>;
  }

  // Handle changes on the form
  // const handleChange = (event) => {
  //   event.preventDefault();
  //   const { name, value } = event.target;

  //   setUserState({
  //     ...userState,
  //     [name]: value,
  //   });
  //   try {
  //     updateUser({ variables: { userParam, ...userState } })
  //   }
  //   catch(e){
  //     console.error(e);
  //   }
  // };

  // Check if Resource is free
  const isResourceFree = (cost) => {
    if ((Math.round(parseFloat(cost)*100)/100) === 0)
      return true;
    else
      return false;
  }

  // Delete Resource
  const handleDelete = async event =>{
    event.preventDefault();

    const targetEl = event.target;

    if (targetEl.hasAttribute("data-number")){

      const attrValue = targetEl.getAttribute("data-number");
      const resourceId = attrValue.replace("image-", "");
      console.log(resourceId);

      try{
        await deleteResource({ variables: {id: resourceId } });
        window.location.assign('/profile');
      }
      catch(e){
        console.error(e);
      }
    }
  }


  return (
        <>
          <div className="profileContainer">
              <div className="profileWelcomeBack"><h4>Welcome Back, {`${user.firstName}`}!</h4></div>
              <Box bg="transparent" height="40px" />
              <Box className="profile-grid-item">
                <Box className="profileLeft" minWidth="30%">
                  <p className="profileField">Username: <span className="smallBox" name={userState.username}>{`${user.username}`}</span></p> 
                  <p className="profileField">First Name: <span className="smallBox" value={userState.firstName}>{`${user.firstName}`}</span></p> 
                  <p className="profileField">Last Name: <span className="smallBox" value={userState.lastName}>{`${user.lastName}`}</span></p> 
                  <p className="profileField">Email: <span className="smallBox" value={userState.email}>{`${user.email}`}</span></p> 
                  <p className="profileField">Wallet: <span className="wheat">${`${user.wallet.toFixed(2)}`}</span></p> 
                  <br></br><br></br>
                  <Box className="newPostBtn" >
                    <a className="plainA" href="/statement/">See Wallet Statement</a>
                  </Box>
                  <Box className="newPostBtn" >
                    <a className="plainA" href="/resource/">Create New Post</a>
                  </Box>
                  <br></br>
                </Box>
              </Box>
            
              <br></br>
              <h5>My Contributions</h5>
              <div className="width100">
                {user.resources.map((resource) => (
                    <div className="profileCard">
                      <CardResource resource={resource} useClass="card-img-size-search"></CardResource>
                      <div className="profileCardCostButtons">
                        <span className="profileFreeOrPaid">
                          COST: {isResourceFree(resource.cost) ? (`FREE`) : (`$${resource.cost}` )} 
                        </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link className="plain" to={`/resource/${resource._id}`}>
                          <Button 
                          className="edit"
                          bg="wheat"
                          padding=".3rem"
                          width="70px"
                          >Edit</Button>
                        </Link>
                        <Button 
                          className="edit"
                          bg="wheat"
                          padding=".3rem"
                          width="70px"
                          data-number={`image-${resource._id}`} 
                          onClick={handleDelete}>
                            Delete
                        </Button>
                      </div>
                      <br></br><br></br><br></br>
                    </div>
                  ))}
              </div>

              {!user.resources.length ? <span className="profileFreeOrPaid">You have not contributed any resources yet.</span> : null }

              <Box bg="transparent" height="20px" />
              <h5>My Purchased resources</h5>
  
              {user.paidResources.map((resource) => (
                  <Box>
                    <CardResource
                      resource={resource} useClass="card-img-size-search"
                    ></CardResource>
                    <br></br><br></br><br></br>
                  </Box>
                ))}
              
              {!user.paidResources.length ? <span className="profileFreeOrPaid">You have not purchased any resources yet.</span> : null }
     
            </div>

            <div className="profileBgSeeNew">
              <div className="profileSeeNew">
                <h4>SEE WHAT'S NEW</h4>
                <Resource></Resource>
              </div>
            </div>

          </>
  );
};

export default ProfilePage;
