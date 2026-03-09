"use client";

import { useEffect } from "react";

type Props = {
  token: string;
};

export default function OpenAppRedirect({ token }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "vagabundo://plan/" + token;
    }, 400);

    return () => clearTimeout(timer);
  }, [token]);

  return null;
}