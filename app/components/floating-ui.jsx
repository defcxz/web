"use client"

import { computePosition, shift, flip, offset } from "@floating-ui/dom";
import { findDOMNode } from "react-dom";

const floating = findDOMNode(document.getElementsById("socialDescription"));

document.addEventListener("mousemove"), ({clientX, clientY}) => {
   const virtualEl = {
      getBoundingClientReact() {
         return {
            width: 0,
            heigth: 0,
            x: clientX,
            y: clientY,
            left: clientX,
            right: clientX,
            top: clientY,
            bottom: clientY
         };
      }
   };

   computePosition(virtualEl, floating, {
      placement: "right-start",
      middleware: [offset(5), flip(), shift()]
   }).then(({x, y}) => {
      Object.assign(floating.style, {
         top: `${y}px`,
         left: `${x}px`
      });
   });
}