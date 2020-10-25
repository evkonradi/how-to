import React,  { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { ADD_RESOURCE } from '../../utils/mutations';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

function ResourceAddEdit(){

    const [formState, setFormState] = useState({ articleName: "", articleShortDesc: "", articleText: "", imageLinkInput:"", 
            imageCaption: "", imageList: [], videoLinkInput:"", videoCaption: "", videoList: [] });

    const [addResource] = useMutation(ADD_RESOURCE);            
   
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
        imageList.push({fileURL: formState.imageLinkInput, imageCaption: formState.imageCaption });

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
        videoList.push({fileURL: formState.videoLinkInput, videoCaption: formState.videoCaption });

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
            await addResource({ variables: { ...formState }    })
        } catch (e) {
          console.error(e);
        }
    };

    return(
        <div>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input id ="articleName" placeholder="Article Name" name="articleName" onChange={handleChange} value={formState.articleName}></input>
                    <input id ="articleShortDesc" placeholder="Article Short Description" name="articleShortDesc" value={formState.articleShortDesc} onChange={handleChange}></input>
                    <textarea id ="articleText" rows="20" cols="300" name="articleText" value={formState.articleText} onChange={handleChange}>
                        Please enter your article text here.
                    </textarea>
                </div>

                <div>
                    {formState.imageList.map(image => (
                        <div key ={`${image.fileURL}`}>
                            <img src={`${image.fileURL}`} alt={`${image.imageCaption}`} width="300" ></img>
                            <span>{image.imageCaption}</span>
                        </div>
                    ))}
                </div>

                <div>
                    <InputGroup>
                    <InputGroupAddon addonType="append">
                    <Input id ="imageLinkInput" placeholder="Link to an image" name="imageLinkInput" value={formState.imageLinkInput} onChange={handleChange}></Input>
                    <Input id ="imageCaption" placeholder="Image Caption" name="imageCaption" value={formState.imageCaption} onChange={handleChange}></Input>
                    <Button id="btnAddImage" onClick={handleImageAdd}>Add Image</Button>
                    </InputGroupAddon>
                    </InputGroup>
                </div>

                <div>
                    {formState.videoList.map(video => (
                        <div key ={`${video.fileURL}`}>
                            <iframe width="300" src={`${video.fileURL}`} frameBorder="0" title={video.videoCaption}
                                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </div>
                    ))}
                </div>

                <div>
                    <input id ="videoLinkInput" placeholder="Link to a video" name="videoLinkInput" value={formState.videoLinkInput} onChange={handleChange}></input>
                    <input id ="videoCaption" placeholder="Video Caption" name="videoCaption" value={formState.videoCaption} onChange={handleChange}></input>
                    <button id="btnAddVideo" onClick={handleVideoAdd}>Add Video</button>
                </div>


                <button id = "btnSubmit" type="submit">Submit</button>
            </form>
        </div>
    );

}

export default ResourceAddEdit;