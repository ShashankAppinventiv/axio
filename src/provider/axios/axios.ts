import axios, { AxiosResponse } from "axios";
import { response } from "express";

export const axiosCall = async (
  method: String,
  url: string,
  data?: any,
  headers?: any
) => {
  try {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://devapi.diabeticu.net/user-activity-service/v1/user/profile',
      headers: { 
        'api-key': 'QXBpS2V5Rm9yRGlhYmV0aWNV', 
        'lang': 'en', 
        'Authorization': 'Bearer yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI2OGI5MDgzMTE1ODNkMWViMTI0ZDgiLCJ0b2tlblR5cGUiOiJVU0VSIiwic2Vzc2lvbklkIjoiNjUyNzkxNDAwNTE4N2EwY2NhNGVhMjJiIiwiaWF0IjoxNjk3MDkxOTA0LCJleHAiOjE2OTcxNzgzMDR9.a_E0skeNrA7Ejoal6u6bYe09JK7P4pxiXB-nEWy-yLg'
      }
    };
    
    const Response: AxiosResponse<any> = await axios(config);
    return Response;
  } catch (err) {
    console.log("error--------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", err);
  }
};
