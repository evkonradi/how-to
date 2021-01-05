import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { ADD_RESOURCE, UPDATE_RESOURCE } from "../utils/mutations";
import { QUERY_RESOURCE } from "../utils/queries";
import { useParams } from "react-router-dom";
import { Col, Row, Container, InputGroup, Input} from "reactstrap";
import { Box, Button } from "@chakra-ui/core";
//import { idbPromise } from "../utils/helpers";

function ResourceAddEdit() {
  const { id } = useParams();

  const [formState, setFormState] = useState({
    articleName: "",
    articleShortDesc: "",
    articleText: "",
    imageLinkInput: "",
    imageCaption: "",
    cost: "",
    imageList: [],
    videoLinkInput: "",
    videoCaption: "",
    videoList: [],
  });

  const [addResource] = useMutation(ADD_RESOURCE);
  const [updateResource] = useMutation(UPDATE_RESOURCE);

  const { loading, data } = useQuery(QUERY_RESOURCE, {
    variables: { _id: id },
    skip: !id, // do not run this when id parameter is null (new resource page)
  });

  //in the edit mode populate state with the data from the database
  useEffect(() => {
    if (data) {
      setFormState({
        articleName: data.resource.name,
        articleShortDesc: data.resource.shortDescription,
        articleText: data.resource.resourceBody,
        cost: data.resource.cost,
        imageLinkInput: "",
        imageCaption: "",
        imageList: data.resource.images.map((image) => {
          delete image.__typename;
          return image;
        }),
        videoLinkInput: "",
        videoCaption: "",
        videoList: data.resource.videos.map((video) => {
          delete video.__typename;
          return video;
        }),
      });
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });

  };

  // add images to the list of images
  const handleImageAdd = (event) => {
    event.preventDefault();

    let { imageList } = formState;
    imageList.push({
      fileURL: formState.imageLinkInput,
      imageCaption: formState.imageCaption,
    });

    setFormState({
      ...formState,
      imageList: imageList,
      imageLinkInput: "",
      imageCaption: "",
    });
  };

    // add videos to the list of videos 
    const handleVideoAdd = (event) =>{
      event.preventDefault();

      let {videoList} = formState;
      videoList.push({fileURL: formState.videoLinkInput, videoCaption: formState.videoCaption});

      setFormState({
          ...formState,
          videoList: videoList,
          videoLinkInput: "",
          videoCaption:""
      });

  };

  const isCostValid = () =>{

    const floatFormat = /^\d*\.?\d*$/;

    if (formState.cost.toString().match(floatFormat))
      return true;
    else
      return false;
  }

  //submit form and save data to the database
  const handleFormSubmit = async event => {
      event.preventDefault();

      if (!isCostValid())
        return;

      const costValue = Math.round(parseFloat(formState.cost)*100)/100;  

      if (!id){
        try{
          await addResource({ variables: { ...formState, cost: costValue } });
          console.log("New resource added");
          window.location.assign('/profile');
        }
        catch(e){
          console.error(e);
        }
      }
      else {
        try{
          await updateResource({ variables: { id, ...formState, cost: costValue } });
          console.log("Resource updated");
          window.location.assign('/profile');
        }
        catch(e){
          console.error(e);
        }
      }

  };

  //delete an image or video from the list
  const handleDelete = async event =>{
      event.preventDefault();

      const targetEl = event.target;

      if (targetEl.hasAttribute("data-number")){
          const attrValue = targetEl.getAttribute("data-number");
          const elPosition = parseInt(attrValue.replace("image-", "").replace("video-",""));

          if (attrValue.indexOf("image") > -1){
              let itemsList = formState.imageList;
              itemsList.splice(elPosition, 1);
              setFormState({ ...formState, imageList: itemsList });
          }
          else{
              let itemsList = formState.videoList;
              itemsList.splice(elPosition, 1);
              setFormState({ ...formState, videoList: itemsList });
          }
      }
  }

  return (
      <main className="main-container">
        <Box bg="transparent" height="40px"></Box>
        <Box className="copyBox">
        
        <form onSubmit={handleFormSubmit} className="cardTextAlign">
          <Col>
            <Box bg="wheat" w="100%" p={4} color="#C2DFE3">
              <h1>{id ? "Edit Article" : "New Article"}</h1>
            </Box>
          </Col>{" "}
          <br />
          <Col>
            <Input className="span"
              id="articleName"
              placeholder="Article Name"
              name="articleName"
              onChange={handleChange}
              value={formState.articleName}
            ></Input>
            <br />
            <Input className="span"
              id="articleShortDesc"
              placeholder="Article Short Description"
              name="articleShortDesc"
              value={formState.articleShortDesc}
              onChange={handleChange}
            ></Input>
            <br />
            <Input className="span"
              type="textarea"
              id="articleText"
              rows="20"
              cols="100"
              name="articleText"
              value={formState.articleText}
              placeholder= "Please enter your article text here."
              onChange={handleChange}
            >
            </Input>
            <br />
            <span>Please enter cost for this article (0 for FREE article), $</span>
            <Input className="span"
              id="cost"
              placeholder="0"
              name="cost"
              value={formState.cost}
              onChange={handleChange}
            >
            </Input>
            {!isCostValid() ? <span className="errorMessage">Please enter a valid cost!</span> : null}
            <br />
            <br />
          </Col>
          <Col className="cardTextAlign" >
            {formState.imageList.map((image) => (
              <div
                key={`div-image-${formState.imageList.indexOf(image)}`}
                onClick={handleDelete}
              >
                <img
                  src={`${image.fileURL}`}
                  alt={`${image.imageCaption}`}
                  width="300"
                ></img>
                <br></br>
                <span>{image.imageCaption}</span>
                <img className="deleteButtonEdit" style={{width:60}}
                  src="/images/icondelete.png"
                  alt="delete"
                  data-number={`image-${formState.imageList.indexOf(image)}`}
                ></img>
                <br />
                <br />
              </div>
            ))}
          </Col>
          <Col>
            <InputGroup>
              <Input className="span"
                id="imageLinkInput"
                placeholder="Link to an image"
                name="imageLinkInput"
                value={formState.imageLinkInput}
                onChange={handleChange}
              ></Input>
              <br />
              <br />
            </InputGroup>
            <InputGroup>
              <Input className="span"
                id="imageCaption"
                placeholder="Image Caption"
                name="imageCaption"
                value={formState.imageCaption}
                onChange={handleChange}
              ></Input>
              <br />
              <br />
            </InputGroup>
          </Col>
          <Col >
            <Button 
            className="center"
              size="md"
              height="36px"
              width="100px"
              border="2px"
              bg="wheat"
              color="#253237"
              _hover={{ color: "#D99748" }}
              id="btnAddImage" 
              onClick={handleImageAdd}>
              Add Image
            </Button>
            <br></br>
            <br></br>
            <br></br>
          </Col>
          <Row>
            <Col xs={12} className="cardTextAlign">
              {formState.videoList.map((video) => (
                <div
                  key={`div-video-${formState.videoList.indexOf(video)}`}
                  onClick={handleDelete}
                >
                  <iframe
                    src={`${video.fileURL}`}
                    style={{maxWidth:500}}
                    frameBorder="0"
                    title={video.videoCaption}
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                  <br></br>
                  <span>{video.videoCaption}</span>
                  <img className="deleteButtonEdit" style={{width:60}}
                    src="/images/icondelete.png"
                    alt="delete"
                    width="3px"
                    data-number={`video-${formState.videoList.indexOf(video)}`}
                  ></img>
                  <br />
                  <br />
                </div>
              ))}
              <br />
            </Col>
          </Row>
          <Col xs={12}>
            <InputGroup>
              <Input
                id="videoLinkInput"
                placeholder="Link to a video"
                name="videoLinkInput"
                value={formState.videoLinkInput}
                onChange={handleChange}
              ></Input>
              <br />
              <br />
            </InputGroup>
          </Col>
          <Col xs={12} className="cardTextAlign">
            <InputGroup>
              <Input
                id="videoCaption"
                placeholder="Video Caption"
                name="videoCaption"
                value={formState.videoCaption}
                onChange={handleChange}
              ></Input>
              <br />
              <br />
            </InputGroup>
            <Col>
              <Button className="center"
            size="md"
            height="36px"
            width="100px"
            border="2px"
            bg="wheat"
            color="#253237"
            _hover={{ color: "#D99748" }}
              id="btnAddVideo"
              onClick={handleVideoAdd}>
                Add Video
              </Button>
              {/* </InputGroupAddon> */}
            </Col>
            <br />
          </Col>
          
          <Col className="cardTextAlign">

<Button
            className="center"
            size="lg"
            height="46px"
            width="200px"
            border="2px"
            bg="#D99748"
            color="wheat"
            _hover={{ color: "#253237" }}
            type="submit"
            id="btnSubmit"
          >
              Submit
            </Button>
    
          </Col>
         
        </form>
        </Box>
        </main>

  );
}

export default ResourceAddEdit;
