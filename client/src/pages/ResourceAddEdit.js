import React,  { useEffect, useState } from "react";
import { useMutation, useQuery } from '@apollo/react-hooks';
import { ADD_RESOURCE, UPDATE_RESOURCE } from '../utils/mutations';
import { QUERY_RESOURCE } from '../utils/queries';
import { useParams } from 'react-router-dom';
import { Col, Row, Container, InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
// import { WhiteSpace } from 'antd-mobile';
import { Box } from "@chakra-ui/core";

function ResourceAddEdit(){

    const { id } = useParams();

    const [formState, setFormState] = useState({ articleName: "", articleShortDesc: "", articleText: "", imageLinkInput:"", 
            imageCaption: "", imageList: [], videoLinkInput:"", videoCaption: "", videoList: [] });

    const [addResource] = useMutation(ADD_RESOURCE);
    const [updateResource] = useMutation(UPDATE_RESOURCE);

    const { loading, data } = useQuery(QUERY_RESOURCE, {
            variables: { _id: id },
            skip : !id
    });

    //in the edit mode populate state with the data from the database
    useEffect(()=>{
        if (data){
            setFormState({
                articleName: data.resource.name,
                articleShortDesc: data.resource.shortDescription,
                articleText: data.resource.resourceBody,
                imageLinkInput: "",
                imageCaption: "",
                imageList: data.resource.images.map(image=>{delete image.__typename; return image;}),
                videoLinkInput: "",
                videoCaption: "",
                videoList: data.resource.videos.map(video=>{delete video.__typename; return video;})
              }); 
        }
    },[data]);

    if (loading) {
        return <div>Loading...</div>;
    }

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value
        });
    };

    // add images to the list of images 
    const handleImageAdd = (event) =>{
        event.preventDefault();

        let {imageList} = formState;
        imageList.push({fileURL: formState.imageLinkInput, imageCaption: formState.imageCaption});

        setFormState({
            ...formState,
            imageList: imageList,
            imageLinkInput: "",
            imageCaption:""
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


    //submit form and save data to the database
    const handleFormSubmit = async event => {
        event.preventDefault();
      
        try {
            if (!id){
                await addResource({ variables: { ...formState } })
            }
            else{
                await updateResource({ variables: { id, ...formState } })
            }

            window.location.assign('/resource');
        } catch (e) {
          console.error(e);
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

    return(
        <div>
            <Container fluid>
                <Col xs={12}>
            <Box bg="#5C6B73" w="100%" p={4} color="#C2DFE3">
            <h2>{id ? "Edit Article" : "New Article"}</h2>
            <form onSubmit={handleFormSubmit}></form>
            </Box>
            </Col> <br />
                    <Col xs={12}>
                    <Input id ="articleName" placeholder="Article Name" name="articleName" onChange={handleChange} value={formState.articleName}></Input><br />
                    <Input id ="articleShortDesc" placeholder="Article Short Description" name="articleShortDesc" value={formState.articleShortDesc} onChange={handleChange}></Input><br />
                    <Input type="textarea" id ="articleText" rows="20" cols="100" name="articleText" value={formState.articleText} onChange={handleChange}>
                        Please enter your article text here.
                    </Input><br /><br />
                    </Col>
               

               <Col xs={12}>
                    {formState.imageList.map(image => (
                        <div key ={`div-image-${formState.imageList.indexOf(image)}`} onClick={handleDelete}>
                            <img src={`${image.fileURL}`} alt={`${image.imageCaption}`} width="300" ></img>
                            <span>{image.imageCaption}</span>
                            <img src="/images/icondelete.png" alt="delete" width="50" data-number={`image-${formState.imageList.indexOf(image)}`} ></img><br /><br />
                        </div>
                    ))}
                </Col>

                <Col xs={12}>
                    <InputGroup>
                    {/* <InputGroupAddon addonType="append"> */}
                    <Input id ="imageLinkInput" placeholder="Link to an image" name="imageLinkInput" value={formState.imageLinkInput} onChange={handleChange}></Input><br /><br />
                    </InputGroup>
                    </Col>
                    <Col xs={12}>
                        <InputGroup>
                    <Input id ="imageCaption" placeholder="Image Caption" name="imageCaption" value={formState.imageCaption} onChange={handleChange}></Input><br /><br />
                    </InputGroup>
                    <Col xs={{ span:6, offset:4 }}>
                    <Button id="btnAddImage" onClick={handleImageAdd}>Add Image</Button>
                    {/* </InputGroupAddon> */}
                    </Col>
                </Col>
                <Row>
                <Col xs={12}>
                    {formState.videoList.map(video => (
                        <div key ={`div-video-${formState.videoList.indexOf(video)}`} onClick={handleDelete}>
                            <iframe width="300" src={`${video.fileURL}`} frameBorder="0" title={video.videoCaption}
                                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            <span>{video.videoCaption}</span>
                            <img src="/images/icondelete.png" alt="delete" width="50" data-number={`video-${formState.videoList.indexOf(video)}`} ></img>
                            <br /><br />
                        </div>
                    ))}<br />
                </Col>
                </Row>
                

                <Col xs={12}>
                    <InputGroup>
                    {/* <InputGroupAddon addonType="append" */}
                    <Input id ="videoLinkInput" placeholder="Link to a video" name="videoLinkInput" value={formState.videoLinkInput} onChange={handleChange}></Input><br /><br />
                    {/* <WhiteSpace size="xs"></WhiteSpace> */}
                   </InputGroup>
                   </Col>
                    <Col xs={12}>
                        <InputGroup>
                    <Input id ="videoCaption" placeholder="Video Caption" name="videoCaption" value={formState.videoCaption} onChange={handleChange}></Input><br /><br />
                    </InputGroup>
                    <Col xs={{ span:6, offset:4 }}>
                    <Button id="btnAddVideo" onClick={handleVideoAdd}>Add Video</Button>
                    {/* </InputGroupAddon> */}
                    </Col><br />
                    
                </Col>
                <Col xs={{ span:6, offset:5 }}>
                <Button id = "btnSubmit" type="submit">Submit</Button>
                </Col>
                </Container>
 </div>
        
    );

}

export default ResourceAddEdit;