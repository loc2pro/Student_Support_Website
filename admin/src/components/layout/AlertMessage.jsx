import React from "react";

export default function AlertMessage({ info }) {
  return info === null ? null : <h1 color="red">{info}</h1>;
}
