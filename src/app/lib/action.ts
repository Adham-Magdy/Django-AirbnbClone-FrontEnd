"use server";

import { cookies } from "next/headers";

export async function handleLogin(
  user_id: string,
  accessToken: string,
  refreshToken: string
) {
  // set cookies for user id
  (await cookies()).set("session_userid", user_id, {
    httpOnly: true,
    secure: false,
    maxAge: 60 * 60 * 24 * 7, // one week,
    path: "/",
  });
  (await cookies()).set("session_access_token", accessToken, {
    httpOnly: true,
    secure: false,
    maxAge: 60 * 60, // one hour
    path: "/",
  });

  (await cookies()).set("session_refresh_token", refreshToken, {
    httpOnly: true,
    secure: false,
    maxAge: 60 * 60 * 24 * 7, // one hour
    path: "/",
  });
}

export async function resetAuthCookies(){

  (await cookies()).set("session_userid",'');
  (await cookies()).set("session_access_token",'');
  (await cookies()).set("session_refresh_token",'');
}

export async function getUserId(){
  const userId = (await cookies()).get("session_userid")?.value;
  return userId? userId:null;
}

export async function getSessionAccessToken(){
  const accessToken = (await cookies()).get("session_access_token")?.value;

  return accessToken;
}