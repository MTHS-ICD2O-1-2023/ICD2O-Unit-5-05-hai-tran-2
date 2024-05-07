// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Hai Tran
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * this function find type of triangle
 */

function findTriangleType() {
  // input
  const lengthA = parseFloat(document.getElementById("length-a").value)
  const lengthB = parseFloat(document.getElementById("length-b").value)
  const lengthC = parseFloat(document.getElementById("length-c").value)

  // process
  if ((lengthA + lengthB > lengthC) && (lengthA + lengthB > lengthC) && (lengthA + lengthB > lengthC)) {
    if ((lengthA == lengthB) && (lengthB == lengthC)) {
      // output
      document.getElementById("result").innerHTML = "This is a Equilateral Triangle"
    } else if ((lengthA == lengthB) || (lengthB == lengthC) || (lengthA == lengthC)) {
      // output
      document.getElementById("result").innerHTML = "This is a Isosceles Triangle"
    } else {
      // output
      document.getElementById("result").innerHTML = "This is a Scalene Triangle"
    }
  } else {
    // output
    document.getElementById("result").innerHTML = "This is not a triangle"
  }
}
