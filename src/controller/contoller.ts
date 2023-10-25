import { axiosCall } from "../provider/axios/axios";
import axios  from 'axios';
import { Request, Response, response } from "express";
class CheckController {
  checkAxiosCall = async (req: Request, res: Response) => {
    try {
      let payload = {
        apiKey: "c801f73c4353414faf030141d6c599ab",
      };
      let Response :any= await axiosCall(
        "GET",
        "",
        {},
        payload
      );
        console.log(Response);
        res.send(Response.data);
    //   let config = {
    //     method: "get",
    //     maxBodyLength: Infinity,
    //     url: "localhost:3001/axiosCheck/check",
    //     headers: {},
    //   };

    //   axios
    //     .request(config)
    //     .then((response) => {
    //       console.log(JSON.stringify(response.data));
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });

    //   console.log(Response);
    } catch (err) {
      console.log(err);
    }
  };
}
export const checkController = new CheckController();
